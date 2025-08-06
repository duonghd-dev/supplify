console.log("Using updated script.js with input-search field - 2025-08-06");

document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      title: "Nước rửa tay",
      category: "Personal Hygiene",
      price: 15000,
      description:
        "Làm sạch và khử khuẩn hiệu quả, dịu nhẹ với da tay, hương thơm dễ chịu, phù hợp dùng trong khách sạn và homestay",
      image:
        "https://media.istockphoto.com/id/1530095031/vi/anh/b%C3%ACnh-%C4%91%E1%BB%B1ng-x%C3%A0-ph%C3%B2ng-r%E1%BB%ADa-tay-t%E1%BA%A1o-b%E1%BB%8Dt-trong-mockup-n%E1%BB%99i-th%E1%BA%A5t-ph%C3%B2ng-t%E1%BA%AFm-m%C3%A0u-%C4%91en-k%E1%BA%BFt-xu%E1%BA%A5t-3d.jpg?s=612x612&w=0&k=20&c=mKLIMDxT9e54Sy9CC-V5iccWOvFxpLpBLkIfDgnp3dY=",
      combo: "Combo tắm gội rửa tay (3 món)",
    },
    {
      id: 2,
      title: "Dầu gội",
      category: "Personal Hygiene",
      price: 18000,
      description:
        "Dầu gội mượt tóc, sạch gàu, phù hợp nhiều loại tóc, dạng gói tiện dụng cho khách sạn",
      image:
        "https://media.istockphoto.com/id/2187266018/photo/amber-pump-bottle-with-white-label-mockup-for-bathing-products-in-bathroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=-vGS3ei7iJRcM5fk8blptJVGmWwV5HZyNBDwnvD5Blo=",
      combo: "Combo tắm gội rửa tay (3 món)",
    },
    {
      id: 3,
      title: "Sữa tắm",
      category: "Personal Hygiene",
      price: 22000,
      description:
        "Sữa tắm dịu nhẹ, dưỡng ẩm da, tạo bọt tốt, thích hợp dùng hằng ngày cho khách lưu trú",
      image:
        "https://media.istockphoto.com/id/1254915689/vi/anh/ph%E1%BB%91i-c%E1%BA%A3nh-phong-c%C3%A1ch-ph%C3%B2ng-t%E1%BA%AFm-hi%E1%BB%87n-%C4%91%E1%BA%A1i-tuy%E1%BB%87t-%C4%91%E1%BA%B9p-v%E1%BB%9Bi-chai-x%C3%A0-ph%C3%B2ng-m%C3%A0u-%C4%91en.jpg?s=612x612&w=0&k=20&c=xJa3WJL8pGHJKO_WnQgjuNL7l3L1g_gyAETaODTYDzQ=",
      combo: "Combo tắm gội rửa tay (3 món)",
    },
    {
      id: 4,
      title: "Bàn chải + kem đánh răng",
      category: "Personal Hygiene",
      price: 22000,
      description:
        "Combo tiện lợi dùng một lần, đảm bảo vệ sinh và tiện lợi cho khách lưu trú",
      image:
        "https://media.istockphoto.com/id/1160154544/vi/anh/b%C3%A0n-ch%E1%BA%A3i-%C4%91%C3%A1nh-r%C4%83ng-b%E1%BA%B1ng-tre-v%E1%BB%9Bi-kem-%C4%91%C3%A1nh-r%C4%83ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-xanh.jpg?s=612x612&w=0&k=20&c=kvlJQbyOtmpjYNgiCGwPGvbDho-K0ztx6fBePf95Kxc=",
      combo: "Combo vệ sinh cá nhân (7 món)",
    },
    {
      id: 5,
      title: "Mũ tắm",
      category: "Personal Hygiene",
      price: 22000,
      description:
        "Mũ nilon co giãn tốt, không thấm nước, phù hợp cho 1 lần sử dụng tại khách sạn",
      image:
        "https://media.istockphoto.com/id/1081906836/vi/vec-to/n%E1%BA%AFp-v%C3%B2i-hoa-sen-g%E1%BA%A5p-ch%E1%BB%91ng-th%E1%BA%A5m-n%C6%B0%E1%BB%9Bc-m%C3%A0u-%C4%91en-v%E1%BB%9Bi-g%C3%B3i-nh%E1%BB%8F.jpg?s=612x612&w=0&k=20&c=t_KX_E7ZR_dGJOG0pdTXHWYBX8h_Kc2EdtAV_LmvYhk=",
      combo: "Combo vệ sinh cá nhân (7 món)",
    },
    {
      id: 6,
      title: "Lược nhựa",
      category: "Personal Hygiene",
      price: 22000,
      description:
        "Lược nhựa gọn nhẹ, dễ sử dụng, thiết kế đơn giản, sạch sẽ, tiện cho khách đi du lịch",
      image:
        "https://media.istockphoto.com/id/979879958/vi/anh/l%C6%B0%E1%BB%A3c-g%E1%BB%97-m%C3%A0u-n%C3%A2u-c%E1%BA%ADn-c%E1%BA%A3nh.jpg?s=612x612&w=0&k=20&c=So-9qRcSn7T7Os1kAKwo4zEehhQPsHio2Gj13x1MFos=",
      combo: "Combo vệ sinh cá nhân (7 món)",
    },
    {
      id: 7,
      title: "Dao cạo, keo cạo",
      category: "Personal Hygiene",
      price: 22000,
      description:
        "Bộ dao cạo dùng 1 lần kèm kem cạo râu mini, an toàn và tiện dụng cho nam giới",
      image:
        "https://media.istockphoto.com/id/1199001871/vi/anh/m%C3%A1y-c%E1%BA%A1o-r%C3%A2u-d%C3%B9ng-m%E1%BB%99t-l%E1%BA%A7n-v%C3%A0-kem-c%E1%BA%A1o-r%C3%A2u-%C4%91%C6%B0%E1%BB%A3c-ph%C3%A2n-l%E1%BA%ADp-tr%C3%AAn-m%C3%A0u-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=OvnL69s6YF82IDS1WL36rodJWQU2N7P1Rr0XDXFQygs=",
      combo: "Combo vệ sinh cá nhân (7 món)",
    },
    {
      id: 8,
      title: "Tăm bông",
      category: "Personal Hygiene",
      price: 22000,
      description:
        "Tăm bông tiệt trùng, mềm mại, dùng vệ sinh cá nhân hằng ngày, đóng gói sạch sẽ",
      image:
        "https://media.istockphoto.com/id/183359308/vi/anh/t%C4%83m-b%C3%B4ng.jpg?s=612x612&w=0&k=20&c=75s-NqF9AADfhWlSfPAv66LHppo5ASUdaFqogMlefMc=",
      combo: "Combo vệ sinh cá nhân (7 món)",
    },
    {
      id: 9,
      title: "Bông tẩy trang",
      category: "Personal Hygiene",
      price: 22000,
      description:
        "Miếng bông cotton mềm mịn, thấm hút tốt, phù hợp cho tẩy trang hoặc vệ sinh da",
      image:
        "https://media.istockphoto.com/id/1484964762/vi/anh/b%C3%A0n-tay-ph%E1%BB%A5-n%E1%BB%AF-v%E1%BB%9Bi-mi%E1%BA%BFng-b%C3%B4ng-m%E1%BB%9Bi-s%E1%BA%A1ch-t%E1%BB%AB-h%E1%BB%99p-nh%E1%BB%B1a-chu%E1%BA%A9n-b%E1%BB%8B-r%E1%BB%ADa-m%E1%BA%B7t.jpg?s=612x612&w=0&k=20&c=attMN50gNDej9U23csoJ7WhfrTS9FaEivDsX_gn1B9w=",
      combo: "Combo vệ sinh cá nhân (7 món)",
    },
    {
      id: 10,
      title: "Dây chun buộc tóc",
      category: "Personal Hygiene",
      price: 22000,
      description:
        "Dây buộc tóc đơn giản, co giãn tốt, sử dụng linh hoạt cho tóc dài",
      image:
        "https://media.istockphoto.com/id/912883058/vi/anh/ban-nh%E1%BA%A1c-t%C3%B3c.jpg?s=612x612&w=0&k=20&c=HtTegg0BxeZJhCsa1XQR1x5Xs16LjvFHp9Si7VzFIcM=",
      combo: "Combo vệ sinh cá nhân (7 món)",
    },
    {
      id: 11,
      title: "Giấy vệ sinh",
      category: "Paper & Towels",
      price: 22000,
      description:
        "Giấy vệ sinh 2 lớp mềm mại, độ dai cao, an toàn cho da nhạy cảm",
      image:
        "https://media.istockphoto.com/id/186881699/vi/anh/gi%E1%BA%A5y-d%C3%B9ng-m%E1%BB%99t-l%E1%BA%A7n.jpg?s=612x612&w=0&k=20&c=WRjhXAuJ-IJP2s1TtzSvO2AxZmeHf5h5N1V052f0fmM=",
      combo: "Combo giấy tiêu dùng (2 món)",
    },
    {
      id: 12,
      title: "Khăn giấy",
      category: "Paper & Towels",
      price: 22000,
      description:
        "Khăn giấy rút/giấy gấp mềm mịn, tiện lợi khi ăn uống hoặc vệ sinh cá nhân",
      image:
        "https://media.istockphoto.com/id/672944654/vi/anh/kh%C4%83n-gi%E1%BA%A5y-trong-ph%C3%B2ng-ngh%E1%BB%89.jpg?s=612x612&w=0&k=20&c=f3PKBnhRfnGkioEYZ4Gihu0d_ZGDABN7OYb8xfkk4i4=",
      combo: "Combo giấy tiêu dùng (2 món)",
    },
    {
      id: 13,
      title: "Túi giặt là",
      category: "Laundry",
      price: 22000,
      description:
        "Túi giặt vải lưới/PE sạch sẽ, giúp lưu giữ quần áo khách trong quá trình giặt là",
      image:
        "https://media.istockphoto.com/id/1483917114/vi/anh/th%C3%A0nh-ph%E1%BA%A7n-ph%E1%BB%A5-ki%E1%BB%87n-spa-%C4%91%E1%BA%B7t-trong-kh%C3%A1ch-s%E1%BA%A1n-spa-ban-ng%C3%A0y-trung-t%C3%A2m-ch%C4%83m-s%C3%B3c-s%E1%BB%A9c-kh%E1%BB%8Fe-s%E1%BA%AFc-%C4%91%E1%BA%B9p.jpg?s=612x612&w=0&k=20&c=EObMfJphlITXfj2amNxmB2-QUmiN0WWeu1Igc0KUw8k=",
      combo: "Combo tiện ích bổ sung (4 món)",
    },
    {
      id: 14,
      title: "Dép dùng 1 lần",
      category: "Disposable Items",
      price: 22000,
      description:
        "Dép vải không dệt hoặc xốp tiện lợi, sạch sẽ, dùng trong phòng nghỉ",
      image:
        "https://media.istockphoto.com/id/91002713/vi/anh/kh%C4%83n-trong-gi%E1%BB%8F.jpg?s=612x612&w=0&k=20&c=tNcOnG2s853rlcnrgjCqLsFoNPIGCa2JBN2ZqSDh15c=",
      combo: "Combo tiện ích bổ sung (4 món)",
    },
    {
      id: 15,
      title: "Nước lau sàn / Tẩy toilet",
      category: "Cleaning & Sanitation Supplies",
      price: 22000,
      description:
        "Dung dịch làm sạch sàn/toilet chuyên dụng, giúp khử mùi và diệt khuẩn hiệu quả",
      image:
        "https://media.istockphoto.com/id/1761596606/vi/anh/d%C3%A9p-d%C3%B9ng-m%E1%BB%99t-l%E1%BA%A7n-cho-kh%C3%A1ch-s%E1%BA%A1n.jpg?s=612x612&w=0&k=20&c=ZIFdTPGf-L8M_Vzu1D2ikL7V-k0gTCp3CLpmmSxu4Eg=",
      combo: "Combo vệ sinh phòng (6 món)",
    },
    {
      id: 16,
      title: "Nước rửa chén",
      category: "Cleaning & Sanitation Supplies",
      price: 22000,
      description:
        "Nước rửa chén trung tính, khử mùi tanh, an toàn cho da tay, thích hợp nhà bếp khách sạn",
      image:
        "https://media.istockphoto.com/id/1761596606/vi/anh/d%C3%A9p-d%C3%B9ng-m%E1%BB%99t-l%E1%BA%A7n-cho-kh%C3%A1ch-s%E1%BA%A1n.jpg?s=612x612&w=0&k=20&c=ZIFdTPGf-L8M_Vzu1D2ikL7V-k0gTCp3CLpmmSxu4Eg=",
      combo: "Combo vệ sinh phòng (6 món)",
    },
    {
      id: 17,
      title: "Khăn lau, giẻ lau",
      category: "Cleaning & Sanitation Supplies",
      price: 22000,
      description:
        "Khăn lau đa năng, bền, thấm hút tốt, dùng vệ sinh phòng, bếp, nhà vệ sinh",
      image:
        "https://media.istockphoto.com/id/1310416597/vi/anh/g%C4%83ng-tay-cao-su-b%E1%BA%A3o-v%E1%BB%87-virus-corona-virus-corona-b%E1%BB%87nh-y-t%E1%BA%BF-v%E1%BB%87-sinh-s%E1%BB%A3c-kh%E1%BB%8Fe.jpg?s=612x612&w=0&k=20&c=ZyE9vdItUllz8Aso9oUMwGfJW3tY8_WljNY9KxCRHvg=",
      combo: "Combo vệ sinh phòng (6 món)",
    },
    {
      id: 18,
      title: "Xịt khử mùi phòng",
      category: "Cleaning & Sanitation Supplies",
      price: 22000,
      description:
        "Chai xịt khử mùi hương nhẹ nhàng, khử mùi ẩm mốc, tạo không gian dễ chịu",
      image:
        "https://media.istockphoto.com/id/173889659/vi/anh/cu%E1%BB%99n-t%C3%BAi-r%C3%A1c.jpg?s=612x612&w=0&k=20&c=2DrYCBY5J0zFHAe6BZ3BuNDRiteIKUm0loiFg7clfeE=",
      combo: "Combo vệ sinh phòng (6 món)",
    },
    {
      id: 19,
      title: "Găng tay dùng 1 lần",
      category: "Disposable Items",
      price: 22000,
      description:
        "Găng tay nhựa PE/HD trong suốt, tiện lợi cho vệ sinh phòng và chế biến thực phẩm",
      image:
        "https://media.istockphoto.com/id/875647346/vi/anh/s%E1%BA%A3n-ph%E1%BA%A9m-l%C3%A0m-s%E1%BA%A1ch-tr%E1%BB%91ng-tr%C3%AAn-m%C3%A0u-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=BruCFwJvxHRivWuFAaZIuZwq2iqZJ5U9xrXD88jzoVE=",
      combo: "Combo vệ sinh phòng (6 món)",
    },
    {
      id: 20,
      title: "Túi rác",
      category: "Disposable Items",
      price: 22000,
      description:
        "Túi đựng rác đen/trắng nhiều kích cỡ, dẻo dai, phù hợp các loại thùng rác khách sạn",
      image:
        "https://media.istockphoto.com/id/2194328699/vi/anh/mockup-chai-m%C3%A0u-n%C3%A2u-cho-ch%E1%BA%A5t-t%E1%BA%A9y-r%E1%BB%ADa-b%C3%A1t-%C4%91%C4%A9a-t%E1%BB%B1-nhi%C3%AAn-trong-nh%C3%A0-b%E1%BA%BFp.jpg?s=612x612&w=0&k=20&c=SMpqSo2r41_N5bBebqxTzgDzugxcdntsl-gaRLm_UG0=",
      combo: "Combo vệ sinh phòng (6 món)",
    },
    {
      id: 21,
      title: "Khăn tắm",
      category: "Paper & Towels",
      price: 22000,
      description:
        "Khăn cotton mềm mịn, thấm hút tốt, kích thước tiêu chuẩn khách sạn",
      image:
        "https://media.istockphoto.com/id/182172008/vi/anh/kh%C4%83n-t%E1%BA%AFm.jpg?s=612x612&w=0&k=20&c=bR87skATrcOPjAOPDIO5Yn4fvNG_l1huo7bFnlrLSWY=",
      combo: "Combo tiện ích bổ sung (4 món)",
    },
    {
      id: 22,
      title: "Khăn mặt",
      category: "Paper & Towels",
      price: 22000,
      description:
        "Khăn cotton nhỏ gọn, dùng cho mặt, thấm hút tốt, dễ giặt và nhanh khô",
      image:
        "https://media.istockphoto.com/id/2178059195/vi/anh/chai-phun-k%C3%ADch-ho%E1%BA%A1t-m%E1%BB%B9-ph%E1%BA%A9m-m%C3%A0u-n%C3%A2u-v%E1%BB%9Bi-mockup-nh%C3%A3n-tr%E1%BB%91ng.jpg?s=612x612&w=0&k=20&c=h9y5-Z6B3Ynpi1DIkHWEevVTtG5CJ_quYRdtOCPFtrc=",
      combo: "Combo tiện ích bổ sung (4 món)",
    },
  ];

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;

  const productGrid = document.querySelector(".product-grid");
  const searchBtn = document.querySelector("#search-btn");
  const searchInput = document.querySelector(".input-search");
  const cartBtn = document.querySelector("#cart-btn");
  const userBtn = document.querySelector("#user-btn");
  const checkboxes = document.querySelectorAll(
    '.filter-group input[type="checkbox"]'
  );
  const loginModal = document.querySelector("#login-modal");
  const cartPanel = document.querySelector("#cart-panel");

  if (!productGrid) console.error("Product grid (.product-grid) not found");
  if (!searchBtn) console.error("Search button (#search-btn) not found");
  if (!searchInput) console.error("Search input (.input-search) not found");
  if (!cartBtn) console.error("Cart button (#cart-btn) not found");
  if (!userBtn) console.error("User button (#user-btn) not found");
  if (checkboxes.length === 0) console.error("No filter checkboxes found");
  if (!loginModal) console.error("Login modal (#login-modal) not found");
  if (!cartPanel) console.error("Cart panel (#cart-panel) not found");

  function updateUserButton() {
    if (userBtn) {
      userBtn.innerHTML = isLoggedIn
        ? '<a style="font-family: Quicksand, sans-serif; font-size: 16px; color: #1F2937; ">Đăng xuất</a>'
        : '<a style="font-family: Quicksand, sans-serif; font-size: 16px; color: #1F2937;">Đăng nhập</a>';
    }
  }

  function renderProducts(filteredProducts) {
    if (!productGrid) {
      console.error("Cannot render products: productGrid element is null");
      return;
    }
    productGrid.innerHTML = "";
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${
          product.image
        }" onerror="this.onerror=null;this.src='https://placehold.co/400x400';" alt="${
        product.title
      }" class="product-image">
        <div class="product-details">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-description">${product.description}</p>
          <div class="price-and-btn">
            <span class="product-price">${product.price.toLocaleString(
              "vi-VN"
            )} VNĐ</span>
            <button class="add-to-cart-btn" data-id="${
              product.id
            }">Thêm vào giỏ</button>
          </div>
        </div>
      `;
      productGrid.appendChild(productCard);
    });

    document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
      btn.addEventListener("click", () => addToCart(btn.dataset.id));
    });
  }

  function filterProducts() {
    const selectedCategories = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map(
        (checkbox) => checkbox.parentElement.querySelector("span").textContent
      );

    const filteredProducts = products.filter((product) => {
      return (
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category) ||
        selectedCategories.includes(product.combo)
      );
    });

    renderProducts(filteredProducts);
  }

  function addToCart(productId) {
    if (!isLoggedIn) {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!");
      triggerLoginModal();
      return;
    }

    const product = products.find((p) => p.id === parseInt(productId));
    if (!product) {
      console.error(`Product with ID ${productId} not found`);
      return;
    }
    const cartItem = cart.find((item) => item.id === parseInt(productId));

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} đã được thêm vào giỏ hàng!`);
  }

  function updateCartPanel() {
    if (!cartPanel) return;

    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    cartPanel.querySelector(".cart-items").innerHTML =
      cart.length === 0
        ? "<p>Giỏ hàng trống!</p>"
        : cart
            .map(
              (item) => `
      <div class="cart-item">
        <img src="${
          item.image
        }" onerror="this.onerror=null;this.src='https://placehold.co/100x100';" alt="${
                item.title
              }" class="cart-item-image">
        <div class="cart-item-details">
          <h3>${item.title}</h3>
          <p class="cart-item-description">${item.description}</p>
          <div class="quantity-controls">
            <button class="quantity-btn decrease" data-id="${
              item.id
            }">−</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn increase" data-id="${
              item.id
            }">+</button>
          </div>
          <p>Giá: ${(item.price * item.quantity).toLocaleString(
            "vi-VN"
          )} VNĐ</p>
        </div>
      </div>
    `
            )
            .join("");
    cartPanel.querySelector(
      ".cart-total"
    ).innerHTML = `<h3>Tổng cộng: ${totalPrice.toLocaleString(
      "vi-VN"
    )} VNĐ</h3>`;

    document.querySelectorAll(".quantity-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        const isIncrease = btn.classList.contains("increase");
        updateCartQuantity(id, isIncrease);
      });
    });
  }

  function updateCartQuantity(productId, increase) {
    const cartItem = cart.find((item) => item.id === productId);
    if (!cartItem) return;

    if (increase) {
      cartItem.quantity += 1;
    } else {
      cartItem.quantity -= 1;
      if (cartItem.quantity <= 0) {
        cart = cart.filter((item) => item.id !== productId);
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartPanel();
  }

  function triggerLoginModal() {
    if (!loginModal) return;
    loginModal.classList.add("open");

    const closeModal = () => {
      loginModal.classList.add("closing");
      setTimeout(() => {
        loginModal.classList.remove("open", "closing");
      }, 300);
    };

    const loginForm = document.querySelector("#loginForm");
    const closeModalBtn = document.querySelector(".close-modal-btn");
    const createAccountLink = document.querySelector(".create-account a");

    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        if (email === "testlog@example.com" && password === "testlog") {
          isLoggedIn = true;
          localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
          updateUserButton();
          alert("Đăng nhập thành công!");
          window.location.href = "product_list.html";
        } else {
          alert("Email hoặc mật khẩu không đúng!");
        }
        closeModal();
      });
    }

    if (createAccountLink) {
      createAccountLink.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Chuyển đến trang đăng ký");
        closeModal();
      });
    }

    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", closeModal);
    }

    loginModal.addEventListener("click", (e) => {
      if (!loginModal.querySelector(".login-container").contains(e.target)) {
        closeModal();
      }
    });
  }

  function logout() {
    isLoggedIn = false;
    cart = [];
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("cart", JSON.stringify(cart));
    updateUserButton();
    alert("Đã đăng xuất!");
    window.location.href = "index.html";
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const searchTerm = searchInput.value.trim();
      const filteredProducts = searchTerm
        ? products.filter(
            (product) =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              product.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          )
        : products;
      renderProducts(filteredProducts);
    });
  }

  if (cartBtn) {
    cartBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!cartPanel.classList.contains("open")) {
        updateCartPanel();
        cartPanel.classList.add("open");

        const closeCartPanel = (event) => {
          if (
            !cartPanel.querySelector(".cart-content").contains(event.target) &&
            event.target !== cartBtn
          ) {
            cartPanel.classList.remove("open");
            setTimeout(() => {
              document.removeEventListener("click", closeCartPanel);
            }, 300);
          }
        };

        setTimeout(() => {
          document.addEventListener("click", closeCartPanel);
        }, 100);
      }
    });
  }

  if (userBtn) {
    updateUserButton();
    userBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (isLoggedIn) {
        logout();
      } else {
        triggerLoginModal();
      }
    });
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterProducts);
  });

  renderProducts(products);
});
