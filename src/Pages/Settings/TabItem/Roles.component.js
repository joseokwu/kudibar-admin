import Button from "../../../component/Button/button";
import styles from "./styles.module.css";
export const Roles = () => {
  return (
    <div className="my-7">
      <section className="my-10">
        <div className={styles.roleContainer}>
          <p className="text-[#12152899]">Role</p>
          <p className="">Admin</p>
        </div>
        <div className={styles.roleContainer}>
          <p className=" text-[#12152899]">Permission</p>
          <p className="text-[#328BE0]">View Details</p>
        </div>
        <div className={styles.roleContainer}>
          <p className=" text-[#12152899]">Action</p>
          <p className="text-[#D34646]">Delete</p>
        </div>
      </section>
      <section className="my-10">
        <div className={styles.roleContainer}>
          <p className="text-[#12152899]">Role</p>
          <p className="">Manager</p>
        </div>
        <div className={styles.roleContainer}>
          <p className=" text-[#12152899]">Permission</p>
          <p className="text-[#328BE0]">View Details</p>
        </div>
        <div className={styles.roleContainer}>
          <p className=" text-[#12152899]">Action</p>
          <p className="text-[#D34646]">Delete</p>
        </div>
      </section>
      <Button>Create Role</Button>
    </div>
  );
};
