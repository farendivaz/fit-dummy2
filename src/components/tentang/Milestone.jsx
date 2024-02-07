import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Milestone = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <section className="milestone">
        <div className="m-5">
          <div className="rounded-3xl h-full p-8 w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-white overflow-hidden">
            <h1 className="text-2xl font-bold text-center md:text-3xl lg:text-3xl xl:text-4xl text-primary-100">
              Milestones Perusahaan
            </h1>
            <Swiper
              navigation={true}
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex flex-col mx-12 py-6">
                  <h1 className="text-8xl text-blue-400 font-bold">2021</h1>
                  <div className="flex gap-8">
                    <div className="w-3/5">
                      <img
                        className="rounded-2xl"
                        src="/public/tim/carousel1.jpg"
                        alt="Image Milestone Cover"
                      />
                    </div>
                    <div className="w-2/5 flex flex-col items-center justify-center my-auto mx-auto mt-5 place-items-center ql-editor">
                      <p className="hidden mx-auto text-base text-justify xl:block">
                        Peluncuran Aplikasi FitAja! oleh KBUMN Pada Jumat, 23
                        Juli 2021 telah dilakukan penandatangan MOU kerja sama
                        pengembangan aplikasi FitAja! oleh 8 perusahaan BUMN
                        yang bergerak di bidang ekosistem kesehatan, dan
                        dilanjutkan dengan...
                      </p>
                      <a
                        onClick={showModal}
                        data-modal="modal-1"
                        className="px-8 py-1 mx-auto my-5 font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                      >
                        Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col mx-12 py-6">
                  <h1 className="text-8xl text-blue-400 font-bold">2022</h1>
                  <div className="flex gap-8">
                    <div className="w-3/5">
                      <img
                        className="rounded-2xl"
                        src="/public/tim/carousel1.jpg"
                        alt="Image Milestone Cover"
                      />
                    </div>
                    <div className="w-2/5 flex flex-col items-center justify-center my-auto mx-auto mt-5 place-items-center ql-editor">
                      <p className="hidden mx-auto text-base text-justify xl:block">
                        Peluncuran Aplikasi FitAja! oleh KBUMN Pada Jumat, 23
                        Juli 2021 telah dilakukan penandatangan MOU kerja sama
                        pengembangan aplikasi FitAja! oleh 8 perusahaan BUMN
                        yang bergerak di bidang ekosistem kesehatan, dan
                        dilanjutkan dengan...
                      </p>
                      <a
                        onClick={showModal}
                        data-modal="modal-1"
                        className="px-8 py-1 mx-auto my-5 font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                      >
                        Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col mx-12 py-6">
                  <h1 className="text-8xl text-blue-400 font-bold">2023</h1>
                  <div className="flex gap-8">
                    <div className="w-3/5">
                      <img
                        className="rounded-2xl"
                        src="/public/tim/carousel1.jpg"
                        alt="Image Milestone Cover"
                      />
                    </div>
                    <div className="w-2/5 flex flex-col items-center justify-center my-auto mx-auto mt-5 place-items-center ql-editor">
                      <p className="hidden mx-auto text-base text-justify xl:block">
                        Peluncuran Aplikasi FitAja! oleh KBUMN Pada Jumat, 23
                        Juli 2021 telah dilakukan penandatangan MOU kerja sama
                        pengembangan aplikasi FitAja! oleh 8 perusahaan BUMN
                        yang bergerak di bidang ekosistem kesehatan, dan
                        dilanjutkan dengan...
                      </p>
                      <a
                        onClick={showModal}
                        data-modal="modal-1"
                        className="px-8 py-1 mx-auto my-5 font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                      >
                        Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* Modal */}
      {modalVisible && (
        <div className="fixed w-full inset-0 z-[9999] overflow-auto bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className=" bg-white w-1/2  mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
            <div className="py-4 w-full text-left px-6">
              {/* Close button */}
              <div className="flex justify-end pb-3">
                <button className="cursor-pointer z-50" onClick={hideModal}>
                  ❌
                </button>
              </div>
              {/* Modal content */}
              <div>
                <img
                  className="rounded-2xl mb-4"
                  src="/public/tim/carousel1.jpg"
                  alt="Image Milestone Cover"
                />
                <p className="hidden mx-auto text-base text-justify xl:block">
                  Peluncuran Aplikasi FitAja! oleh KBUMN Pada Jumat, 23 Juli
                  2021 telah dilakukan penandatangan MOU kerja sama pengembangan
                  aplikasi FitAja! oleh 8 perusahaan BUMN yang bergerak di
                  bidang ekosistem kesehatan, dan dilanjutkan dengan...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Milestone;
