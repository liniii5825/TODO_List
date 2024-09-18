const Item = ({ id, note, date, time, deleteData, submittingStatus }) => {
  function deleteItem() {
    submittingStatus.current = true;
    deleteData(function (prevData) {
      return prevData.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div>
        <span>{note}</span>
        <span>{`${date} ${time}`}</span>
      </div>
      <button className="remove" onClick={deleteItem}>
        删除
      </button>
    </div>
  );
};

export default Item;
