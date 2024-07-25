import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { type, name, placeholder } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs ">
        <h1 className="text-3xl bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% bg-clip-text text-transparent font-bold mb-2">Login</h1>
        <p className="mb-5">Welcome, please enter your details</p>
        <div className="mb-5">
          <Label htmlFor={name}>{label}</Label>
          <Input type={type} name={name} placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
};

export default InputForm;
