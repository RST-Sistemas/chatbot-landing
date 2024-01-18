const Collapse = ({ data }) => {
  return (
    <div className='border shadow-lg collapse collapse-arrow '>
      <input type='checkbox' />
      <h2 className='w-full collapse-title text-primary-content'>
        {data.title}
      </h2>
      <div className='w-full collapse-content text-primary-content'>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Collapse;
