import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of Dental specialist , dedicated to
          providing top-notch Dentalcare services at iSmile Dental Clinic. Trust in their
          knowledge and experience to lead you towards a Dental Health.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Neha Mohanty"
          title="CARE HOSPITAL"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Priyadarshini Sahu"
          title="SHREE HOSPITAL"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Jugajyoti Pathi"
          title="KIMS HOSPITAL"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Sauvik Singha"
          title="CARE HOSPITAL"
          stars="4.8"
          reviews="500"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Sauvik Singha"
          title="CARE HOSPITAL"
          stars="4.8"
          reviews="500"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Sauvik Singha"
          title="CARE HOSPITAL"
          stars="4.8"
          reviews="500"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Sauvik Singha"
          title="CARE HOSPITAL"
          stars="4.8"
          reviews="500"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Madhusudan"
          title="CARE HOSPITAL"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
