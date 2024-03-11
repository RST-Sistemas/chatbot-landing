import { AlertSVG } from "../../../../assets/svg";
import Image from "next/image";
import swal from "sweetalert";

const Input = ({ error, label, placeholder, ...props }) => {
  return (
    <label className='w-full form-control'>
      <div className='label'>
        <span className='label-text text-neutral'>{label}</span>
        {error && (
          <div
            className='flex items-center justify-center w-6 h-6 bg-red-600 rounded-full'
            onClick={() => {
              swal("Error", error[0], "error");
            }}
          >
            <Image src={AlertSVG} height={13} width={13} alt='alert' />
          </div>
        )}
      </div>
      <input
        type='type'
        placeholder={placeholder}
        {...props}
        className={`w-full input ${
          error && "border-red-600 border-2"
        } input-bordered placeholder:text-gray-300`}
      />
    </label>
  );
};

export default Input;
