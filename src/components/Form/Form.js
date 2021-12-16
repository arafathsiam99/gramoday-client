import React from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (data.insertedId) {
          alert("User added successfully");
        }
      });
    reset();
  };
  return (
    <div>
      <h1>Gramoday App</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="mt-3" {...register("userID")} placeholder="User-ID" />{" "}
        <br />
        <input
          className="mt-3"
          {...register("market-1")}
          placeholder="marketID"
        />{" "}
        <br />
        <input
          className="mt-3"
          {...register("marketName")}
          placeholder="marketName"
        />{" "}
        <br />
        <input
          className="mt-3"
          {...register("cmdtyID")}
          placeholder="cmdtyID"
        />{" "}
        <br />
        <input
          className="mt-3"
          {...register("marketType")}
          placeholder="marketType"
        />{" "}
        <br />
        <input
          className="mt-3"
          {...register("cmdtyName")}
          placeholder="cmdtyName"
        />{" "}
        <br />
        <input
          onChange={handleOnChange}
          className="mt-3"
          placeholder="priceUnit"
        />
        <br />
        <select onChange={handleOnChange} className="mt-3">
          <option value="">select...</option>
          <option value="Quintal">Quintal</option>
          <option value="Pack">Pack</option>
        </select>
        <br />
        <input
          className="mt-3"
          type="number"
          {...register("minPrice")}
          placeholder="minPrice"
        />{" "}
        <br />
        <input
          className="mt-3"
          type="number"
          {...register("maxPrice")}
          placeholder="maxPrice"
        />{" "}
        <br />
        <input className="mt-3 btn btn-success" type="submit" />
      </form>
    </div>
  );
};

export default Form;
