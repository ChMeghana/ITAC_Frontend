const UploadDocuments = () => {
  return (
    <div className="w-full bg-gray-100 py-10">

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl px-12 py-8 shadow">

        {/* DOWNLOAD SECTION */}
        <SectionTitle title="Download documents" />

        <div className="border border-black p-4 text-center text-sm mb-10">
          Please download the documents. Go through the documents and fill the
          data. Upload the documents in the below section!
        </div>

        <div className="space-y-5 mb-12">
          <ActionRow label="Confidentiality Statement" action="Download" />
          <ActionRow label="Media Release form" action="Download" />
          <ActionRow label="Energy Assessment Application" action="Download" />
        </div>

        {/* UPLOAD SECTION */}
        <SectionTitle title="Upload documents" />

        <div className="space-y-5">
          <ActionRow label="Most Recent Utility Bills" action="Upload" />
          <ActionRow label="Confidentiality Statement" action="Upload" />
          <ActionRow label="Media Release form" action="Upload" />
          <ActionRow label="Energy Assessment Application" action="Upload" />
          <ActionRow label="Other Documents" action="Upload" />
        </div>

        {/* SAVE BUTTON */}
        <div className="flex justify-end mt-12">
          <button className="bg-orange-500 text-white px-10 py-3 rounded shadow hover:bg-orange-600 transition">
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default UploadDocuments;

/* ===========================
   REUSABLE COMPONENTS
=========================== */

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-center">{title}</h2>
      <div className="h-1 bg-orange-500 w-full mt-2" />
    </div>
  );
};

const ActionRow = ({
  label,
  action,
}: {
  label: string;
  action: "Download" | "Upload";
}) => {
  return (
    <div className="flex items-center justify-center gap-8">
      <span className="w-80 text-right text-base">{label}:</span>

      <button className="bg-gray-600 text-white px-8 py-2 rounded shadow hover:bg-gray-700 transition">
        {action}
      </button>
    </div>
  );
};
