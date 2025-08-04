export default function Section1() {
  return (
    <>
      <div className="grid grid-cols-10 gap-4">
        <div className="space-y-6 col-span-7">
          {/* Full-width heading row */}
          <div className="flex gap-4">
            <h1 className="text-3xl font-bold">Heading1_Line1</h1>
            <h1 className="text-3xl font-bold text-green-500">Heading2_Line1</h1>
          </div>

          <div className="flex gap-4">
            <h2 className="text-3xl font-bold">Heading1_Line1</h2>
            <h2 className="text-3xl font-bold text-green-500">Heading2_Line1</h2>
          </div>

          {/* Two-column content block */}
          <div className="grid grid-cols-2 gap-4">
            <div>Left column</div>
            <div>Right column</div>
          </div>
        </div>
        <div className="col-span-3">
          Image here
        </div>         
      </div>
    </>
  );
}
