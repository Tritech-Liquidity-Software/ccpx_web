import React from "react";
import Container from "../Container";
import Image from "next/image";
import sec_eight_card1 from "@/public/images/Group225.png";
import sec_eight_card2 from "@/public/images/Group226.png";
import sec_eight_card3 from "@/public/images/Group227.png";
import sec8_etherum_icon from "@/public/images/sec-eight-etherum-icon.svg";

const HomeEight = () => {
  return (
    <div className="pt-20">
      <h4 className="text-3xl font-semibold text-[#00BAA9] text-center pb-10 max-sm:pb-6">
        Our 3 OI Bots
      </h4>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 lg:px-32">
          {[sec_eight_card1, sec_eight_card2, sec_eight_card3].map(
            (card, index) => (
              <div
                key={index}
                className="flex flex-col items-center overflow-hidden h-full max-sm:h-[800px]  rounded-xl p-6"
              >
                {/* Image */}
                <Image
                  src={card}
                  className="w-full h-auto object-cover"
                  alt={`Card Image ${index + 1}`}
                />

                {/* Content */}
                <div className="flex flex-col justify-between text-center text-white w-full gap-y-4 flex-1 relative top-[-320px] max-sm:top-[-369px] 2xl:top-[-415px]">
                  {/* Title */}
                  <h5 className="text-lg md:text-xl font-normal text-[#00BAA9]">
                    {["Stealth Trader", "Quantum Navigator", "Infinity Matrix"][
                      index
                    ]}
                  </h5>

                  {/* Description */}
                  <ul className="space-y-2 text-sm md:text-[12px] text-[#D8D8D8] text-left mx-auto px-[20px] max-sm:px-[40px]">
                    {[
                      [
                        "Focuses on low-risk",
                        "Steady growth with safe trade entries",
                        "Ideal for conservative investors.",
                      ],
                      [
                        "Uses a moderate-risk strategy",
                        "High-reward trading",
                        "Balancing higher profit with managed risks.",
                      ],
                      [
                        "Designed for high-risk",
                        "High-reward trading",
                        "Maximizing returns with bolder moves.",
                      ],
                    ][index].map((item, i) => (
                      <li key={i} className="list-disc ml-4">{item}</li>
                    ))}
                  </ul>

                  {/* Profit Information */}
                  <p className="text-base max-sm:text-sm">
                    Earns up to{" "}
                    <span className="text-[#00BAA9]">
                      {["0.5%", "1.5%", "2%"][index]}
                    </span>{" "}
                    daily profit
                  </p>

                  {/* Minimum Investment */}
                  <p className="text-base max-sm:text-sm">
                    Minimum investment required: <br className="hidden md:block max-sm:block" />
                    <span className="text-[#00BAA9]">
                      ${["1,000", "5,000", "10,000"][index]}
                    </span>
                  </p>

                  {/* Subscription Plan */}
                  <p className="text-sm text-[#D8D8D8] max-sm:mt-[18px] 2xl:mt-[28px]">
                    Subscribe plan ${["29", "69", "99"][index]}
                  </p>

                  {/* Buy Button */}
                  <div className="flex justify-center mt-auto">
                    <a href="https://oi.ccpex.io/user/register" target="_blank">
                      <button className="w-[160px] py-2.5 px-6 text-white bg-gradient-to-r from-[#00BAA9] to-[#007D75] rounded-lg hover:scale-105 transition">
                        Buy
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Footer Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-16 px-4 mt-[-200px] max-sm:mt-[-40px]">
          <div className="sec-five-icon flex justify-center py-4 px-8 rounded-lg bg-gray-800">
            <Image src={sec8_etherum_icon} className="w-7" alt="Ethereum Icon" />
          </div>
          <p className="text-lg md:text-base text-white text-center md:text-left">
            Each bot uses different trading algorithms fine-tuned for specific risk levels and profitability.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HomeEight;
