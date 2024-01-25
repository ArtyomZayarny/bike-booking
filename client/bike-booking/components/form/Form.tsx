"use client";
import { FormEvent, useContext, useState } from "react";
import { Button } from "../buttons/Button";
import { Input } from "./Input";
import { BikesContext } from "@/context/bikes-context";
import { Status } from "../ui/card/status.enum";
import { IBike } from "@/types";

import styles from "./form.module.css";

const initialFormState = {
  name: "",
  type: "",
  color: "",
  wheelSize: "",
  price: "",
  slugID: "",
  description: "",
};

export const Form = () => {
  const { addBike } = useContext(BikesContext);
  const [form, setForm] = useState(initialFormState);
  const handleChange = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let val = null;
    const { name, value, type } = event.target;
    val = value;
    if (type === "number") {
      val = value !== "" ? +val : "";
    }
    setForm({ ...form, [name]: val });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const bike = { ...form, status: Status.AVAILABLE };
    addBike(bike as unknown as IBike);
    setForm(initialFormState);
  };

  const resetForm = () => {
    setForm(initialFormState);
  };

  return (
    <form action="#" onSubmit={handleSubmit} className={styles.form}>
      <Input
        value={form.name}
        name="name"
        placeholder="Name"
        handleChange={handleChange}
      />
      <Input
        value={form.type}
        name="type"
        placeholder="Type"
        handleChange={handleChange}
      />
      <Input
        value={form.color}
        name="color"
        placeholder="Color"
        handleChange={handleChange}
      />
      <Input
        value={form.wheelSize}
        name="wheelSize"
        placeholder="Wheel size"
        type="number"
        handleChange={handleChange}
      />
      <Input
        value={form.price}
        name="price"
        placeholder="Price"
        handleChange={handleChange}
        type="number"
      />
      <Input
        value={form.slugID}
        name="slugID"
        placeholder="ID (slug): ХХХХХХХХХХХХХ"
        handleChange={handleChange}
      />
      <textarea
        className={`${styles.formEl} ${styles.description}`}
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
        minLength={5}
      ></textarea>
      <Button type="submit" text="Save" styles={styles.btn} />
      <Button
        type="reset"
        text="Clear"
        styles={styles.btn}
        handleClick={resetForm}
      />
    </form>
  );
};
