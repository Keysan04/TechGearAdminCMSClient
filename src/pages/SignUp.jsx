import React, { useState } from "react";
import CustomInput from "../components/custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const SignUp = () => {
  const [form, setForm] = useState({});
  const [passwordValidationError, setpasswordValidationError] = useState(
    "Must be 6 characters long"
  );
  const handleOnChange = (e) => {
    //password rules
    //1. Must be 6 characters long
    //2. must include uppercase, lowercase, number
    setpasswordValidationError("");
    const { name, value } = e.target;
    if (name === "password") {
      value.length < 6 &&
        setpasswordValidationError("Must be 6 characters long");

      !/[A-Z]/.test(value) &&
        setpasswordValidationError("Must include the letter between A-Z");
      !/[a-z]/.test(value) &&
        setpasswordValidationError("Must include the letter between a-z");
      !/[0-9]/.test(value) &&
        setpasswordValidationError("Must include the number between 0-9");
    }
    if (name === "confirmPassword") {
      form.password !== value &&
        setpasswordValidationError("Password do not match");
    }
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      toast.error("Password do not match");
      return;
    }
    console.log(form);
  };
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "kisan",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "a@b.com",
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: "000",
    },
    {
      label: "Address",
      name: "address",
      placeholder: "123 george st",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "**",
      type: "password",
    },
    {
      label: "ConfirmPassword",
      name: "confirmPassword",
      required: true,
      placeholder: "***",
      type: "password",
    },
  ];

  return (
    <div>
      <div className="text-center">Tech gear Admin CMS</div>
      <Form
        className="w-50 m-auto border rounded shadow-lg p-3 mt-5"
        style={{ width: "500px" }}
        onSubmit={handleOnSubmit}
      >
        <h3>Admin Sign up Only</h3>

        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div>
          {passwordValidationError && (
            <div className="text-danger fw-bold p-3">
              {passwordValidationError}
            </div>
          )}
        </div>
        <div></div>
        <div className="d-grid">
          <Button
            variant="primary"
            type="submit"
            disabled={passwordValidationError}
          >
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
