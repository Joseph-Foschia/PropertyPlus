function ViewDataTest(props) {
  console.log(props.data)
  return (
    <div >
      <h2>{props.data.name}</h2>
    </div>
  )
};

export default ViewDataTest;