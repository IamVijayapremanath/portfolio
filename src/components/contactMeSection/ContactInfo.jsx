import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="vijayapremanath@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+94 756932601" Image={FiPhone} />
      <SingleInfo text="Hatton ,Srilanka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
