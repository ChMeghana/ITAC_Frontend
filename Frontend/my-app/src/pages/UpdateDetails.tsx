// 1️⃣ Type goes at the TOP of the file
type FormRowProps = {
  label: string;
  wide?: boolean;
};

// 2️⃣ Small reusable component
const FormRow = ({ label, wide }: FormRowProps) => {
  return (
    <div className={wide ? "col-span-2" : ""}>
      <label className="block mb-1 font-medium">{label}:</label>
      <input
        type="text"
        className="w-full border rounded-md px-3 py-2"
      />
    </div>
  );
};

// 3️⃣ Main page component

const UpdateDetails = () => {
  return (
    <div className="w-full bg-gray-100 py-10">

      {/* PAGE CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl px-12 py-8 shadow">

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-center">
          My Information
        </h2>
        <div className="h-1 bg-orange-500 w-full mt-2 mb-6" />

        {/* PROFILE SECTION */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <button className="text-sm text-blue-600 mt-2">Edit</button>
        </div>

        {/* FORM GRID */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-sm">

          {/* LEFT COLUMN */}
          <div className="space-y-4">

            <FormRow label="Company Name" wide />
            <FormRow label="Contact Name" />
            <FormRow label="Contact Email" />
            <FormRow label="Contact Phone" />

            <FormRow label="Address" />
            <div className="flex gap-3">
              <FormRow label="City/State" />
              <FormRow label="Zip code" />
            </div>

            <FormRow label="SIC Code" />
            <FormRow label="NAICS" />
            <FormRow label="Annual Energy Consumption" />
            <FormRow label="Annual Gross sales" />
            <FormRow label="Waste water treatment plants size" />

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">

            <FormRow label="Building Size" />
            <FormRow label="Annual utility expenses" />
            <FormRow label="Located in rural?" />
            <FormRow label="Any previous IAC Assessments" />
            <FormRow label="Agricultural Production" />

            <div>
              <label className="block mb-1">Additional contacts or details</label>
              <textarea className="w-full h-32 border rounded-md px-3 py-2" />
            </div>

          </div>

        </div>

        {/* SAVE BUTTON */}
        <div className="flex justify-end mt-10">
          <button className="bg-orange-500 text-white px-8 py-3 rounded shadow hover:bg-orange-600">
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default UpdateDetails;
