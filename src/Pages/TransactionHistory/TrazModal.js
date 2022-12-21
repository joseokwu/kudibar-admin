import Modal from "../../component/Modal";
import React from "react";
import { StatusTag } from "../../component/componentHelpers/Tags/Tags.component";
export const TrazModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <div className="p-2 w-[450px] flex items-center justify-center">
        <section className="py-3 px-[1rem] border border-[#1215281a] rounded-[12px]">
          <div>
            <div className="flex items-center justify-between gap-[3rem]">
              <p className="uppercase font-[600]"> Payment Receipt</p>
              <StatusTag text={"successful"} bg={"green"} />
            </div>
            <div className="my-3 border border-[#12152866] border-dashed"></div>
            <div className="py-4">
              <div className="py-2 flex items-center">
                <p className="w-[60%]">Date:</p>
                <p className="text-[#12152899] text-[14px]">01/3/2022</p>
              </div>
              <div className="py-2 flex items-center">
                <p className="w-[60%]">Time: :</p>
                <p className="text-[#12152899] text-[14px]">13:00 pm</p>
              </div>
              <div className="py-2 flex items-center">
                <p className="w-[60%]">Type:</p>
                <p className="text-[#12152899] text-[14px]">Credit</p>
              </div>
              <div className="py-2 flex items-center">
                <p className="w-[60%]">Payment Id:</p>
                <p className="text-[#12152899] text-[14px]">345335674</p>
              </div>
              <div className="my-3 border border-[#12152866] border-dashed"></div>
              <div className="py-2 flex items-center">
                <p className="w-[60%]">Amount:</p>
                <p className="text-[#12152899] text-[14px]">$40000</p>
              </div>
              <div className="my-3 border border-[#12152866] border-dashed"></div>
              <div className="py-2 flex items-center">
                <p className="w-[60%]">Campaign Type:</p>
                <p className="text-[#12152899] text-[14px]">Celebration</p>
              </div>
              <div className="py-2 flex items-center">
                <p className="w-[60%]">Paid By:</p>
                <p className="text-[#12152899] text-[14px]">Chinonoso David</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};
