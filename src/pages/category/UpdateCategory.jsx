import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomInpute } from "../../components/custom-inpute/CustomInpute";
import { Button, Form } from "react-bootstrap";
import { updateCat } from "./categoryAction";
import { setShowModal } from "../../system-state/systemSlice";

const UpdateCategory = ({ selectedCat }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const { catList } = useSelector((state) => state.catInfo);
  const { showModal } = useSelector((state) => state.modalInfo);
  console.log(form.status);
  useEffect(() => {
    setForm(selectedCat);
    console.log(form);
  }, []);

  const inputs = [
    {
      label: "Status",
      name: "status",
      required: true,
      value: form.status,
    },
    {
      label: "Title",
      name: "title",
      required: true,
      value: form.title,
    },
    {
      label: "Slug",
      name: "slug",
      required: true,
      value: form.slug,
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCat(form));
    dispatch(setShowModal(false));
  };
  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        className="m-auto  p-3 mt-5"
        style={{ width: "500px" }}
      >
        <h3>Update Profile</h3>
        <hr />
        <div className="d-flex " style={{ gap: "1.5rem" }}>
          <h4>Status</h4>
          <div>
            {" "}
            {form.status === "active" ? (
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
            ) : (
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
            )}
          </div>
        </div>

        {inputs.map((item, i) => (
          <CustomInpute key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <Button type="submit">Update</Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateCategory;
