import React, { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";

import Modal from "../../components/Modal";
import FormAddPost from "../../components/FormAddPost";

export default function Posts() {
  const [openModal, setOpenModal] = useState(false);

  function handleOpen() {
    return setOpenModal(true);
  }

  function handleClose() {
    return setOpenModal(false);
  }

  return (
    <>
      <Header title="Posts" handleActionButton={handleOpen} />

      <Card />
      <Card />
      <Card />
      <Card />

      {openModal && (
        <Modal handleClose={handleClose}>
          <FormAddPost handleClose={handleClose} />
        </Modal>
      )}
    </>
  );
}
