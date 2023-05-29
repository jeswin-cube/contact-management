import React from "react";
import { deleteContact, useAppDispatch, useAppSelector } from "../stores";
import { useNavigate } from "react-router-dom";
import { ContactStatus } from "../types";

export const Contacts: React.FC = () => {
  const navigate = useNavigate();

  const contacts = useAppSelector((state) => state.contacts);
  const dispatch = useAppDispatch();

  const handleContactDelete = (index: number) => {
    dispatch(deleteContact(index));
  };

  const handleContactEdit = (index: number) => {
    navigate("/contacts/create-contact", {
      state: {
        contactId: index,
      },
    });
  };

  return (
    <div className={"flex flex-col items-center justify-center h-[100%] w-[100%] p-8"}>
      <button
        onClick={() => {
          navigate("create-contact");
        }}>
        Create Contact
      </button>
      {contacts.length === 0 ? (
        <div>
          <p className={"text-2xl"}>No contacts found. Please add contacts using create contact button</p>
        </div>
      ) : (
        <div className={"mt-[32px] flex gap-[8px] flex-wrap"}>
          {contacts.map((contact, index) => {
            return (
              <div className={"p-8 shadow-lg"} key={index}>
                <p>
                  {contact.firstName} {contact.lastName}
                </p>
                <p className={"mb-8"}>{`Contact Status: ${
                  contact.status === ContactStatus.Active ? "Active Contact" : "Inactive Contact"
                }`}</p>
                <button className={"mr-[8px] bg-lime-700"} onClick={() => handleContactEdit(index)}>
                  Edit
                </button>
                <button className={"bg-red-700"} onClick={() => handleContactDelete(index)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
