const Input = ({ label, placeholder }) => {
  return (
    <label className='w-full form-control'>
      <div className='label'>
        <span className='label-text text-neutral'>{label}</span>
      </div>
      <input
        type='type'
        placeholder={placeholder}
        className='w-full input input-bordered placeholder:text-gray-300'
      />
    </label>
  );
};

export default Input;
