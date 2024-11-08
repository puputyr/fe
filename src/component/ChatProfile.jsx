const ChatProfile = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="30" r="29.5" stroke="#7176B8" />
        <mask
          id="mask0_106_785"
          // style="mask-type:alpha"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x="5"
          y="5"
          width="50"
          height="50"
        >
          <circle cx="30" cy="30" r="24.5455" fill="#7176B8" />
        </mask>
        <g mask="url(#mask0_106_785)">
          <circle cx="30" cy="30" r="24.5455" fill="#7176B8" />
          <ellipse
            cx="29.9999"
            cy="22.3636"
            rx="10.3636"
            ry="10.3636"
            fill="#505593"
          />
          <ellipse
            cx="29.7274"
            cy="50.4544"
            rx="18.8182"
            ry="18.8182"
            fill="#505593"
          />
        </g>
      </svg>
      <div className="whitespace-normal">
        <p className="text-md">Anonymous</p>
        <p className="text-sm">Saya melihat seseorang ...</p>
      </div>
    </div>
  );
};

export default ChatProfile;
