"use client";
import React, { useState } from "react";
import FoundOrder from "./FoundOrder";

function TrackingForm() {
  const [trackingId, setTrackingId] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [founddata, setFoundData] = useState(null);
  const [err, seterr] = useState<string>("");

  const handlesubmit = async () => {
    setIsloading(true);

    setTimeout(async () => {
      const res = await fetch("/api/trackOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchId: trackingId }),
      });
      const data = await res.json();

      const { order, message } = data;
      setIsloading(false);
      if (order) {
        setFoundData(order);
        seterr("");
      } else {
        seterr(message);
      }
    }, 3000);
  };

  console.log(founddata);
  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          className="form-control border-light"
          style={{ padding: 30 }}
          placeholder="AIREZ-9099393909"
          onChange={(e) => setTrackingId(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary px-3" onClick={handlesubmit} disabled={trackingId.length < 9 ? true : false}>
            {isLoading ? (
              <div className="flex items-center gap-5">
                <div className=" w-8 h-8 rounded-full border-4 border-orange-400 border-r-white animate-spin"></div>
                <span className=" font-bold capitalize">...loading</span>
              </div>
            ) : (
              <span>Track &amp; Trace</span>
            )}
          </button>
        </div>
      </div>
      <div>
        <span className=" text-white ">{err}</span>
      </div>

      {founddata && <FoundOrder OrderDetails={founddata} onclose={() => setFoundData(null)} />}
    </div>
  );
}

export default TrackingForm;
