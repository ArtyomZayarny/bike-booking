import { Form } from "../../form/Form";
import { Statistics } from "../../ui/statistics/Statistics";

import { List } from "../list/List";
import "./content.css";

export const Content = () => {
  return (
    <section className="content">
      <List />
      <Form />
      <Statistics />
    </section>
  );
};
