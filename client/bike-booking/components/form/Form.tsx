"use client";
import { FormEvent, useState } from "react";
import { Button } from "../buttons/Button";
import { Input } from "./Input";
import styles from "./form.module.css";

const initialFormState = {
  name: "",
  type: "",
  color: "",
  wheelSize: "",
  price: "",
  id: "",
  description: "",
};

export const Form = () => {
  const [form, setForm] = useState(initialFormState);
  const handleChange = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("formData", form);
    /* Validate and send data to server */
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
        value={form.id}
        name="id"
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
