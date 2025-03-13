// DOM Content Loaded Event
document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("Document is ready!");

    const shareButton = document.querySelector(
      ".share-button"
    );
    const authorSection = document.querySelector(
      ".author-section"
    );
    const authorInfo = document.querySelector(
      ".author-info"
    );
    const sharePopup = document.querySelector(
      ".share-popup"
    );
    const shareLinks = document.querySelectorAll(
      ".share-links img"
    );

    function isMobile() {
      return window.innerWidth <= 768;
    }

    function toggleShareState() {
      const isActive =
        authorSection.classList.contains(
          "sharing"
        );

      if (isMobile()) {
        if (!isActive) {
          // فعال کردن حالت اشتراک
          authorSection.classList.add("sharing");
          authorInfo.style.display = "none";
          sharePopup.style.display = "flex";
          shareButton.style.backgroundColor =
            "var(--desaturated-blue)";
          shareButton.querySelector(
            "svg path"
          ).style.fill = "white";
          shareLinks.forEach((link) => {
            link.style.filter =
              "brightness(0) invert(1)";
          });
        } else {
          // غیرفعال کردن حالت اشتراک
          authorSection.classList.remove(
            "sharing"
          );
          authorInfo.style.display = "flex";
          sharePopup.style.display = "none";
          shareButton.style.backgroundColor =
            "var(--light-grayish-blue)";
          shareButton.querySelector(
            "svg path"
          ).style.fill = "#6E8098";
          shareLinks.forEach((link) => {
            link.style.filter = "";
          });
        }
      } else {
        if (!isActive) {
          authorSection.classList.add("sharing");
          sharePopup.style.display = "flex";
          shareButton.classList.add("active");
        } else {
          authorSection.classList.remove(
            "sharing"
          );
          sharePopup.style.display = "none";
          shareButton.classList.remove("active");
        }
      }
    }

    shareButton.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleShareState();
    });

    // بستن با کلیک خارج از دکمه و پاپ‌آپ
    document.addEventListener("click", (e) => {
      if (
        isMobile() &&
        !shareButton.contains(e.target) &&
        !sharePopup.contains(e.target)
      ) {
        const isActive =
          authorSection.classList.contains(
            "sharing"
          );
        if (isActive) {
          toggleShareState();
        }
      }
    });

    // جلوگیری از بستن با کلیک داخل پاپ‌آپ
    sharePopup.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
);
