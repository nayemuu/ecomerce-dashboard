import { useState } from 'react';
import Table1 from '../../../components/reuseable/Table/Table1/Table1';

let data = [
  { id: 1, category: 'Baby food', location: 'Foodbox', status: 'pending' },
  { id: 2, category: 'Baby food', location: 'Foodbox' },
  { id: 3, category: 'Baby food', location: 'Foodbox' },
];

function Table1Demo() {
  const [selectedIds, setSelectedIds] = useState([]);

  // console.log('selectedIds = ', selectedIds);

  let headers = ['Category Id', 'Category Name', 'Location'];
  let fieldToShow = ['id', 'category', 'location'];
  let actionButtons = {
    view: true,
    edit: true,
    delete: true,
  };

  const handleSingleCheckBox = (id) => {
    if (selectedIds.includes(id)) {
      let newSelectedIds = selectedIds.filter((singleId) => singleId !== id);
      setSelectedIds(newSelectedIds);
    } else {
      setSelectedIds((previousState) => [id, ...previousState]);
    }
  };

  const handleAllCheckBox = () => {
    if (data.length !== selectedIds.length) {
      let allIds = [];

      data.map((item) => {
        allIds.push(item.id);
      });

      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  };

  const handleView = (id) => {
    console.log('id = ', id);
  };

  const handleEdit = (id) => {
    console.log('id = ', id);
  };

  const handleDelete = (id) => {
    console.log('id = ', id);
  };

  return (
    <div className="p-6 bg-[#f3f6fa] rounded-sm">
      <Table1
        totalColumnForData={3}
        title="Add Products Category"
        headers={headers}
        data={data}
        fieldToShow={fieldToShow}
        selectedIds={selectedIds}
        handleSingleCheckBox={handleSingleCheckBox}
        handleAllCheckBox={handleAllCheckBox}
        actionButtons={actionButtons}
        handleView={handleView}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Table1Demo;
