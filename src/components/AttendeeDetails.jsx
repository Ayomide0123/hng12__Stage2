import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, CloudDownload } from "lucide-react";


const apiUrl = import.meta.env.VITE_API_URL;


const AttendeeDetails = () => {
  const getSavedValue = (key) => {
    const savedData = localStorage.getItem("attendeeDetails")
      ? JSON.parse(localStorage.getItem("attendeeDetails"))
      : {};
    return savedData[key] || "";
  };


  const [name, setName] = useState(() => getSavedValue("name"));
  const [email, setEmail] = useState(() => getSavedValue("email"));
  const [message, setMessage] = useState(() => getSavedValue("message"));
  const [imageUrl, setImageUrl] = useState(() => getSavedValue("imageUrl"));
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [imageError, setImageError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "hng12stage2");

      setIsLoading(true);

      try {
        const response = await axios.post(
          `${apiUrl}`,
          formData
        );
        setImageUrl(response.data.secure_url);
      } catch (error) {
        console.error("Image upload failed:", error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!name) {
      setNameError("Name is required.");
      hasError = true;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required.");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!imageUrl) {
      setImageError("Image upload is required.");
      hasError = true;
    } else {
      setImageError("");
    }

    if (!hasError) {
      const attendeeData = { name, email, message, imageUrl };
      localStorage.setItem("attendeeDetails", JSON.stringify(attendeeData));
      // console.log("Form submitted:", attendeeData);
      navigate("/printOut");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6 bg-[#041E23] text-white rounded-2xl border-[1px] border-[#197686]">
      <div className="flex justify-between">
        <p className="text-xl font-light mb-2 JejuMyeongjo">Attendee Details</p>
        <p>Step 2/3</p>
      </div>
      <div className="loading-bar mb-6">
        <div className="filled-bar" style={{ width: "50%" }}></div>
      </div>
      <div className="max-w-lg mx-auto p-4 sm:p-6 bg-[#08252B] text-white rounded-2xl border border-[#197686]">
        <div className="bg-[#052228] p-4 sm:p-6 border border-[#07373F] rounded-2xl">
          <h2 className="text-sm font-semibold mb-4">Upload Profile Photo</h2>
          {/* Image Upload Box */}
          <div className="bg-[#041E23] p-0 sm:px-20 h-40 flex justify-center w-fit sm:w-full mx-auto">
            <span
              {...getRootProps()}
              className="flex justify-center items-center bg-[#0E464F] border-[3px] border-[#24A0B5] rounded-2xl cursor-pointer h-40 w-40 py-6"
            >
              <input {...getInputProps()} />
              {isLoading ? (
                <p className="text-center text-white text-xs">Uploading...</p>
              ) : imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Uploaded"
                  className="w-40 h-40 object-contain rounded-2xl"
                />
              ) : (
                <p className="text-center text-white text-xs flex flex-col items-center gap-3">
                  <CloudDownload />
                  {isDragActive
                    ? "Drop the file here..."
                    : "Drag & drop or click to upload"}
                </p>
              )}
            </span>
          </div>
          {imageError && <p className="text-red-500 mt-2">{imageError}</p>}
        </div>

        <div className="loading-bar my-6"></div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Enter your name *</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-transparent border border-[#07373F] text-white"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
              required
            />
            {nameError && <p className="text-red-500 mt-2">{nameError}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Enter your email *</label>
            <div className="flex items-center bg-transparent border border-[#07373F] p-2 rounded-lg">
              <Mail className="text-white mr-2" />
              <input
                type="email"
                className="w-full bg-transparent outline-none text-white"
                placeholder="hello@masterchief.hng"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                required
              />
            </div>
            {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-1">Special Request?</label>
            <textarea
              rows={3}
              className="w-full p-2 rounded-lg bg-transparent border border-[#07373F] text-white resize-none"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>

          {/* Buttons */}
          <div className="JejuMyeongjo text-sm flex flex-col-reverse sm:flex-row justify-between gap-4 mt-4">
            <button
              className="cursor-pointer w-full sm:w-[48%] bg-transparent border-[1px] border-[#24A0B5] text-[#24A0B5] py-3 rounded-lg hover:bg-[#197686] hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Back
            </button>

            <button
              className="cursor-pointer w-full sm:w-[48%] bg-[#197686] border-[1px] border-[#24A0B5] text-white py-3 rounded-lg hover:bg-transparent"
              onClick={handleSubmit}
            >
              Get My Free Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendeeDetails;
