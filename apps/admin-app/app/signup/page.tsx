import SignupForm from "../components/SignupForm";
import ImageUpload from "../imageUpload";

const Signup = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div>
          <ImageUpload />
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default Signup;
