import { useState } from 'react';
import './Menu.scss';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuData: Record<string, MenuCategory> = {
    appetizers: {
      title: 'Appetizers',
      items: [
        {
          name: 'Seared Scallops',
          description: 'Pan-seared sea scallops with cauliflower purée and pancetta',
          price: '$24',
          image: 'https://images.unsplash.com/photo-1605759758891-430e7885631b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Tuna Tartare',
          description: 'Fresh yellowfin tuna with avocado, cucumber, and citrus vinaigrette',
          price: '$22',
          image: 'https://images.unsplash.com/photo-1656106577512-0259bf5b9fd6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Foie Gras',
          description: 'Pan-seared foie gras with fig compote and brioche',
          price: '$28',
          image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    mains: {
      title: 'Main Courses',
      items: [
        {
          name: 'Wagyu Beef Tenderloin',
          description: 'Grilled A5 Wagyu with truffle mashed potatoes and red wine reduction',
          price: '$65',
          image: 'https://images.unsplash.com/photo-1677607219966-22fbfa433667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Lobster Thermidor',
          description: 'Maine lobster with cognac cream sauce and gruyère cheese',
          price: '$48',
          image: 'https://plus.unsplash.com/premium_photo-1719611418448-d77d769e8ede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9ic3RlciUyMFRoZXJtaWRvcnxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
          name: 'Duck Confit',
          description: 'Slow-cooked duck leg with cherry gastrique and seasonal vegetables',
          price: '$38',
          image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    desserts: {
      title: 'Desserts',
      items: [
        {
          name: 'Chocolate Soufflé',
          description: 'Dark chocolate soufflé with vanilla bean ice cream',
          price: '$16',
          image: 'https://images.unsplash.com/photo-1512035986687-f3cc6aefba8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hvY29sYXRlJTIwU291ZmZsJUMzJUE5fGVufDB8fDB8fHww'
        },
        {
          name: 'Crème Brûlée',
          description: 'Classic vanilla custard with caramelized sugar',
          price: '$14',
          image: 'https://images.unsplash.com/photo-1676300184943-09b2a08319a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Tiramisu',
          description: 'Traditional Italian dessert with espresso and mascarpone',
          price: '$15',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
      ]
    }
  };

  return (
    <div className="menu">
      <section className="menu-hero">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Culinary artistry meets exceptional ingredients</p>
        </div>
      </section>

      <section className="menu-content section">
        <div className="container">
          <div className="menu__categories">
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                className={`menu__category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {menuData[category].title}
              </button>
            ))}
          </div>

          <div className="menu__items">
            <h2 className="menu__category-title">{menuData[activeCategory].title}</h2>
            <div className="menu__grid">
              {menuData[activeCategory].items.map((item, index) => (
                <div key={index} className="menu-item">
                  <div className="menu-item__image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="menu-item__content">
                    <div className="menu-item__header">
                      <h3 className="menu-item__name">{item.name}</h3>
                      <span className="menu-item__price">{item.price}</span>
                    </div>
                    <p className="menu-item__description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
