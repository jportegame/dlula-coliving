import { useRef } from "react";
import { FaGift } from "react-icons/fa";
import Modal from "../common/Modal";
import { siteConfig } from "../../config/siteConfig";

const PromotionPopup = () => {
  const modalRef = useRef<any>(null);

  const openModal = () => {
    modalRef.current?.openModal();
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="fixed cursor-pointer bottom-24 rounded-bl-full rounded-tl-full -right-2 z-50 flex items-center gap-3 bg-black px-6 py-4 text-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-x-2"
        aria-label="Get a special promotion"
      >
        <FaGift size={28} className="text-primary" />

        <span className="hidden font-secondary text-xs font-semibold uppercase tracking-[0.22em] sm:block">
          Get Discount
        </span>
      </button>

      <Modal ref={modalRef} title="Get a Special Promotion">
        <div className="w-full">
          <div className="mb-6 text-center">
            <span className="mb-3 block font-secondary text-xs uppercase tracking-[0.3em] text-primary">
              D’Lula Offer
            </span>

            <h2 className="font-primary text-3xl font-normal uppercase tracking-[0.08em] text-text-primary">
              Claim your exclusive discount
            </h2>

            <p className="mx-auto mt-4 max-w-xl font-primary text-lg leading-7 text-text-secondary">
              Leave us your information and our team will contact you with the
              best available offer for your stay.
            </p>
          </div>

          <div className="h-[70vh] w-full overflow-hidden border border-border bg-background">
            <iframe
              src={siteConfig.promotions.googleFormUrl}
              title="D'Lula Promotion Form"
              className="h-full w-full"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PromotionPopup;