function Contact() {
  return (
    <>
      {/* <div className='fixed top-0 left-0 h-screen w-full bg-[#081b29]'></div>
            <h1 className="relative text-4xl font-bold text-white pt-100">
                This is Contact Page
            </h1>  */}
      <div className="h-full overflow-auto p-4 text-white text-center">
        <p className="text-lg">Your content goes here.</p>
        {[...Array(50)].map((_, i) => (
          <p key={i}>Scrollable Content Line {i + 1}</p>
        ))}
      </div>
    </>
  )
}

export default Contact
