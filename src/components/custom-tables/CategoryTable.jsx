import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../system-state/systemSlice";
import { CustomModal } from "../custom-modal/CustomModal";
import UpdateCategory from "../../pages/category/UpdateCategory";
import { useState } from "react";

export const CategoryTable = () => {
  const [selectedCat, setSelectedCat] = useState({});
  const dispatch = useDispatch();
  const { catList } = useSelector((state) => state.catInfo);

  const handleOnEdit = (obj) => {
    setSelectedCat(obj);
    dispatch(setShowModal(true));
  };

  return (
    <div>
      <CustomModal title="Give reviews">
        <UpdateCategory selectedCat={selectedCat} />
      </CustomModal>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Create Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {catList.map(({ _id, title, status, slug, createdAt }, i) => (
            <tr key={_id}>
              <td>{i + 1}</td>
              <td
                className={status === "active" ? "text-success" : "text-danger"}
              >
                {status}
              </td>
              <td>{title}</td>
              <td>{slug}</td>
              <td>{createdAt?.slice(0, 10)}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => {
                    handleOnEdit({ _id, title, status, slug });
                  }}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
