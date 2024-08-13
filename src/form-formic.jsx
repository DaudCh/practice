import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  selectCountry: Yup.string().required("Required"),
});

const FormFormik = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-semibold mb-4 text-center">Signup Form</h1>
      <Formik
        initialValues={{ name: "", selectCountry: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm, 
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && (
                <div className="text-red-500 text-sm">{errors.name}</div>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm">{errors.password}</div>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Select Country</label>
              <select
                name="selectCountry"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.selectCountry}
              >
                <option value="">Select a country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
              </select>
              {errors.selectCountry && touched.selectCountry && (
                <div className="text-red-500 text-sm">{errors.selectCountry}</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
              disabled={isSubmitting}
            >
              Submit
            </button>
            <button
              type="button"
              className="w-full bg-gray-500 text-white px-3 py-2 rounded-lg hover:bg-gray-600 focus:outline-none"
              onClick={resetForm} 
            >
              Reset
            </button>
          </form>
        )}
      </Formik>
    </div>
  </div>
);

export default FormFormik;
