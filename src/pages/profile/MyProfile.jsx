import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { UpdatePasswordFrm } from "../../components/admin-profile/UpdatePasswordFrm";
import UpdateUserProfile from "../../components/admin-profile/UpdateUserProfile";

const MyProfile = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <AdminLayout title="My Profile">
      <div>
        <UpdateUserProfile />
        <hr />
      </div>
      {showForm === true && (
        <div className="mt-5">
          <h3>Update User Password</h3>
          <hr />
          <UpdatePasswordFrm />
        </div>
      )}
    </AdminLayout>
  );
};

export default MyProfile;
