import AppInput from "./App-input";
import AppRadioButton from "./App-RadioButtons";
// import AppInput from './App-input'

function FormComponent() {
  return (
    <div className="justify-center grid items-center h-screen">
        <AppInput type='text' name='name' placeholder='Type your name' />
        <AppInput type='text' name='email' placeholder='Type email' />
        <AppInput type='text' name='password' placeholder='Type password' />
        <div className="flex flex-row gap-2">
        <AppRadioButton type='submit' txt='Submit' className='bg-blue-500 text-white py-2 px-4 rounded-md' />
        <AppRadioButton type='button' txt='Reset' className='bg-blue-500 text-white py-2 px-4 rounded-md' />
        </div>
    </div>
  );
}

export default FormComponent;
