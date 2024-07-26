import styled from "styled-components";
import Title from "../components/common/Title";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import Empty from "../components/common/Empty";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { carts, deleteCartItem, isEmpty } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckItem = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
      return;
    }
  };

  const handleItemDelete = (id: number) => {
    deleteCartItem(id);
  };

  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        {!isEmpty && (
          <>
            <div className="content">
              {carts.map((item) => (
                <CartItem
                  key={item.id}
                  cart={item}
                  checkedItems={checkedItems}
                  onCheck={handleCheckItem}
                  onDelete={handleItemDelete}
                />
              ))}
            </div>
          </>
        )}
        {isEmpty && (
          <Empty
            title="장바구니가 비워있습니다"
            icon={<FaShoppingCart />}
            description={<>장바구니를 채워보세요</>}
          ></Empty>
        )}
        <div>summary</div>
      </CartStyle>
    </>
  );
};

const CartStyle = styled.div``;

export default Cart;
