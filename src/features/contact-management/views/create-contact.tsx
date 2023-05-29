import React, { useEffect, useState } from "react";
import { ContactStatus } from "../types";
import { createContact, editContact, useAppDispatch, useAppSelector } from "../stores";
import { useLocation, useNavigate } from "react-router-dom";

export const CreateContact: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [activeState, setActiveState] = useState(ContactStatus.Active);

  const dispatch = useAppDispatch();
  const contacts = useAppSelector((state) => state.contacts);

  const getActiveState = (value: string) => {
    if (value === "0") {
      return ContactStatus.Active;
    } else {
      return ContactStatus.NotActive;
    }
  };

  const handleSubmit = () => {
    if (location.state?.contactId !== undefined) {
      dispatch(
        editContact({ id: location.state?.contactId, firstName: firstName, lastName: lastName, status: activeState }),
      );
    } else {
      dispatch(createContact({ id: contacts.length, firstName: firstName, lastName: lastName, status: activeState }));
    }
    navigate("/contacts");
    setFirstName("");
    setLastName("");
    setActiveState(ContactStatus.Active);
  };

  useEffect(() => {
    if (location.state?.contactId !== undefined) {
      setFirstName(contacts[location.state?.contactId].firstName);
      setLastName(contacts[location.state?.contactId].lastName);
      setActiveState(contacts[location.state?.contactId].status);
    }
  }, [contacts, location.state?.contactId]);

  return (
    <div className={"flex flex-col items-center justify-center h-[100%] w-[100%] gap-[20px]"}>
      <p className={"text-lg"}>First Name</p>
      <input type={"text"} value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={"John"} />
      <p className={"text-lg"}>Last Name</p>
      <input type={"text"} value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={"Doe"} />
      <div className={"flex flex-col"}>
        <div className={"flex gap-[8px]"}>
          <input
            type={"radio"}
            name={"active"}
            value={ContactStatus.Active}
            checked={activeState === ContactStatus.Active}
            onChange={(e) => setActiveState(getActiveState(e.target.value))}
          />
          <p className={"text-lg"}>Active</p>
        </div>
        <div className={"flex gap-[8px]"}>
          <input
            type={"radio"}
            name={"active"}
            value={ContactStatus.NotActive}
            checked={activeState === ContactStatus.NotActive}
            onChange={(e) => setActiveState(getActiveState(e.target.value))}
          />
          <p className={"text-lg"}>InActive</p>
        </div>
      </div>
      <button onClick={handleSubmit} disabled={firstName.trim().length === 0 && lastName.trim().length === 0}>
        {location.state?.contactId !== undefined ? "Save Edited Contact" : "Save Contact"}
      </button>
    </div>
  );
};
