// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { serverUrl } from "../App";

// const Editor = () => {
//   const { id } = useParams();
//   const [website, setWebsite] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const handleGetWebsite = async () => {
//       try {
//         const result = await axios.get(
//           `${serverUrl}/api/website/get-by-id/${id}`,
//           { withCredentials: true },
//         );
//         setWebsite(result.data);
//         console.log(result.data);
//       } catch (error) {
//         console.log(error);
//         setError(error.response.data.message);
//       }
//     };
//     handleGetWebsite();
//   }, [id]);
//   if (error) {
//     return (
//       <div className="h-screen flex items-center justify-center bg-black text-red-400">
//         {error}
//       </div>
//     );
//   }
//   if (!website) {
//     return (
//       <div className="h-screen fle items-center justify-center bg-black text-white">
//         Loading...
//       </div>
//     );
//   }
//   return (
//     <div className="h-screen w-screen flex bg-black text-white overflow-hidden">
//       <aside>
//         <Header />
//         <Chat />
//       </aside>
//     </div>
//   );
//   const Header = () => {
//     return (
//       <div className="h-14 px-14 flex items-center justify-between border-b border-white/10">
//         <span className="font-semibold truncate">{website.title}</span>
//       </div>
//     );
//   };
//   const Chat = () => {
//     return (
//       <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
//         {website.conversation.map((m, i) => (
//           <div
//             key={i}
//             className={`max-w-[85%] ${m.role === "user" ? "ml-auto" : "mr-auto"}`}
//           >
//             <div>{m.content}</div>
//           </div>
//         ))}
//       </div>
//     );
//   };
// };

// export default Editor;

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { serverUrl } from "../App";
import { Code, Code2, Monitor, Rocket, Send } from "lucide-react";
import { AnimatePresence,motion } from "motion/react";

// ✅ Editor se BAHAR aur UPAR
const Header = ({ website }) => {
  return (
    <div className="h-14 px-14 flex items-center justify-between border-b border-white/10">
      <span className="font-semibold truncate">{website?.title}</span>
    </div>
  );
};

// ✅ Editor se BAHAR aur UPAR
const Chat = ({
  website,
  updateLoading,
  messages,
  prompt,
  setPrompt,
  handleUpdate,
  thinkingSteps,
  thinkingIndex,
}) => {
  return (
    <>
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages?.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] ${m.role === "user" ? "ml-auto" : "mr-auto"}`}
          >
            <div
              className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-white text-black "
                  : "bg-white/5 border border-white/10 text-zinc-200"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {updateLoading && (
          <div className="max-w-[85%] mr-auto`">
            <div className="px-4 py-2.5 rounded-2xl text-xs bg-white/5 border border-white/10 text-zinc-400 italic">
              {thinkingSteps[thinkingIndex]}
            </div>
          </div>
        )}
      </div>
      <div className="p-3 border-t border-white/10 ">
        <div className="flex gap-2">
          <textarea
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            rows="1"
            placeholder="Describe Changes..."
            className="flex-1 resize-none rounded-2xl px-4 py-3 bg-white/5 border border-white/10 text-sm outline-none"
          ></textarea>
          <button
            onClick={handleUpdate}
            disabled={updateLoading}
            className="px-4 py-3 rounded-2xl bg-white text-black"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </>
  );
};

const Editor = () => {
  const { id } = useParams();
  const [website, setWebsite] = useState(null);
  const [error, setError] = useState("");
  const iframeRef = useRef(null);
  const [code, setCode] = useState("");
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [thinkingIndex, setThinkingIndex] = useState(0);
  const [updateLoading, setUpdateLoading] = useState(false);

  const[showCode,setShowCode]=useState(false)
  // const [sendLoading,setSendLoading]=useState()
  const thinkingSteps = [
    "Analyzing your request...",
    "Writing the code...",
    "Applying changes...",
    "Almost done...",
  ];
  // Editor.jsx mein temporarily add karo
  const addCredits = async () => {
    const result = await axios.get(`${serverUrl}/api/website/add-credits`, {
      withCredentials: true,
    });
    console.log(result.data);
  };

  const handleUpdate = async () => {
    if(!prompt)return
    setUpdateLoading(true);
    setMessages((m) => [...m, { role: "user", content: prompt }]);
    setPrompt(""); // ✅ prompt clear karo, messages nahi

    try {
      const result = await axios.post(
        `${serverUrl}/api/website/update/${id}`,
        { prompt },
        { withCredentials: true },
      );
      console.log(result);
      setUpdateLoading(false);
      setMessages((m) => [
        ...m,
        { role: "assistant", content: result.data.message },
      ]);
      setCode(result.data.code);
      // ✅ Default empty array do
    } catch (error) {
      setUpdateLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!updateLoading) return;
    const i = setInterval(() => {
      setThinkingIndex((i) => (i + 1) % thinkingSteps.length);
    }, 1200);
    return () => clearInterval(i);
  }, [updateLoading]);

  useEffect(() => {
    const handleGetWebsite = async () => {
      try {
        const result = await axios.get(
          `${serverUrl}/api/website/get-by-id/${id}`,
          { withCredentials: true },
        );
        setWebsite(result.data); // ✅ alag line
        setCode(result.data.latestCode);
        setMessages(result.data.conversation || []);
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      }
    };
    handleGetWebsite();
  }, [id]);
  useEffect(() => {
    if (!iframeRef.current || !code) return;
    const blob = new Blob([code], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    iframeRef.current.src = url;
    return () => URL.revokeObjectURL(url);
  }, [code]);
  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-red-400">
        {error}
      </div>
    );
  }
  if (!website) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex bg-black text-white overflow-hidden">
      <aside className="hidden lg:flex w-[380px] flex-col border-r border-white/10 bg-black/80">
        <Header website={website} /> {/* ✅ props pass karo */}
        <Chat
          messages={messages}
          prompt={prompt}
          setPrompt={setPrompt}
          handleUpdate={handleUpdate}
          updateLoading={updateLoading}
          thinkingSteps={thinkingSteps}
          thinkingIndex={thinkingIndex}
        />{" "}
      </aside>
      <div className="flex-1 flex flex-col">
        <div className="h-14 flex justify-between  items-center border-b border-white/10 bg-black/80">
          <span className="text-xs text-zinc-400">Live Preview</span>
          <div className="flex gap-2">
            {/* <button
              className="border border-none bg-white/10 py-2 px-3 rounded-lg"
              onClick={addCredits}
            >
              Add Credits
            </button>{" "} */}
            {/* temporary */}
            <button
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-sm font-semibold hover:scale-105
             transition"
            >
              <Rocket size={14} />
              Deploy
            </button>
            <button className="p-2" onClick={()=>setShowCode(true)}>
              {" "}
              <Code2 size={18} />
            </button>
            <button className="p-2">
              <Monitor size={18} />
            </button>
          </div>
        </div>
        <iframe ref={iframeRef} className="flex-1 w-full bg-white" />
      </div>
      <AnimatePresence>
        {showCode && (
          <motion.div
          
          initial={{x:"100%"}}
          animate={{x:0}}
          exit={{x:"100%"}}
          className="fixed inset-y-0 right-0 w-full lg:w-[45%] z-[9999] bg-[#1e1e1e] flex flex-col">

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Editor;
