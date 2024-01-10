const Collapse = ({ data }) => {
  return (
    <div className='border shadow-lg collapse collapse-arrow '>
      <input type='checkbox' />
      <div className='w-full collapse-title text-primary-content'>
        {data.title}
      </div>
      <div className='w-full collapse-content text-primary-content'>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Collapse;
