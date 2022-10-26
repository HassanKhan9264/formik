import './App.css';
// import { Formik} from 'formik';
import { useFormik } from 'formik';
// import * as yup from 'yup';
import * as yup from 'yup';

function App() {
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });
 
    const formik = useFormik ({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        // alert(JSON.stringify(values, null, 2));
        console.log("value:", values)
      },
    });

     return (
      <div>
    <form onSubmit={formik.handleSubmit}>
    <input
      fullWidth
      id="email"
      name="email"
      label="Email"
      value={formik.values.email}
      onChange={formik.handleChange}
      // error={)}
      // helperText={formik.touched.email && formik.errors.email}
    />
    {
      (formik.touched.email && Boolean(formik.errors.email))?
      <span style={{color:'red'}}>{formik.errors.email}</span>
      :
      null
    }
    <input
      fullWidth
      id="password"
      name="password"
      label="Password"
      type="password"
      value={formik.values.password}
      onChange={formik.handleChange}
      // error={formik.touched.password && Boolean(formik.errors.password)}
      // helperText={formik.touched.password && formik.errors.password}
    />
    {
      (formik.touched.email && Boolean(formik.errors.email))?
      <span style={{color:'red'}}>{formik.errors.password}</span>
      :
      null
    }
    {/* <span style={{color:'red'}}>this is error message</span> */}

    <button color="primary">
      Submit
    </button>
  </form>
  </div>
  );
}

export default App;


    /* <Formik
      initialValues={{
        fName: '',
        lName: '',
        email: '',
      }}
      onSubmit={(values) => {
        console.log("value:", values)
      }}
      >
      <Form>
      <div>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="fName" placeholder="Jane" />
        </div>
        <label htmlFor="lastName">Last Name</label>
        <Field style={{color: "red"}}id="lastName" name="lName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
        id="email"
        name="email"
        placeholder="jane@acme.com"
        type="email"
        />
        <button type="submit">Submit</button>
        </Form>
      </Formik> */