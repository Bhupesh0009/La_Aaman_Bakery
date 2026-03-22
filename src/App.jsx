import { useState } from 'react'
import './App.css'

const menuItems = {
  pastry: [
    {
      name: 'Mango Delight Cake',
      description:
        'Fresh cream cake finished with bright mango glaze, whipped swirls, and a playful smile design.',
      details:
        'Ideal for birthdays and fresh fruit cake lovers. Available for custom message writing and advance call orders.',
      price: 'Rs. 750',
      image: '/menu-mango-cake.png',
    },
    {
      name: 'Blueberry Pastry',
      description:
        'Soft layered pastry with blueberry cream filling and glossy berry topping.',
      details:
        'Best for individual dessert servings. Freshly prepared for the pastry counter and available for same-day pickup.',
      price: 'Rs. 110',
      image: '/menu-blueberry-pastry.png',
    },
    {
      name: 'Black Forest Pastry',
      description:
        'Vanilla sponge layered with cream, cherry filling, chocolate shavings, and dark chocolate drizzle.',
      details:
        'A classic pastry option for chocolate lovers with light cream layers and cherry flavor in every bite.',
      price: 'Rs. 95',
      image: '/menu-blackforest-pastry.png',
    },
    {
      name: 'Chocolate Truffle Pastry',
      description:
        'Rich chocolate pastry topped with ganache, cream dots, and pistachio garnish.',
      details:
        'Dense and indulgent pastry slice for premium dessert orders. Recommended for chocolate-focused cake selections.',
      price: 'Rs. 120',
      image: '/menu-chocolate-pastry.png',
    },
    {
      name: 'Dark Chocolate Pastry',
      description:
        'Deep chocolate sponge layered with smooth chocolate cream and finished with glossy ganache.',
      details:
        'A rich pastry option for customers who prefer full chocolate flavor without fruit toppings.',
      price: 'Rs. 110',
      image: '/menu-dark-chocolate-pastry.png',
    },
    {
      name: 'Mixed Fruit Pastry',
      description:
        'Fresh cream pastry with soft sponge layers and colorful fruit jelly topping.',
      details:
        'A classic bakery counter favorite with light cream texture and a festive fruit finish.',
      price: 'Rs. 95',
      image: '/menu-fruit-pastry.png',
    },
    {
      name: 'Vanilla Cream Pastry',
      description:
        'Soft vanilla sponge pastry with whipped cream layers and a clean cream finish.',
      details:
        'Simple, light, and suitable for customers who want a mild fresh-cream pastry.',
      price: 'Rs. 90',
      image: '/menu-vanilla-pastry.png',
    },
    {
      name: 'Choco Chip Pastry',
      description:
        'Chocolate pastry slice topped with dark and white choco chips over a smooth ganache glaze.',
      details:
        'Balanced chocolate pastry with extra texture on top, ideal for premium pastry selections.',
      price: 'Rs. 120',
      image: '/menu-choco-chip-pastry.png',
    },
    {
      name: 'Coconut Cream Pastry',
      description:
        'Fresh cream pastry coated with soft coconut flakes and layered vanilla sponge.',
      details:
        'A light tropical-style pastry with a soft finish and creamy coconut flavor in every bite.',
      price: 'Rs. 100',
      image: '/menu-coconut-pastry.png',
    },
    {
      name: 'Pineapple Pastry',
      description:
        'Classic pineapple pastry with cream layers, pineapple filling, and cherry garnish.',
      details:
        'One of the most familiar fresh cream pastry options, suitable for everyday takeaway orders.',
      price: 'Rs. 95',
      image: '/menu-pineapple-pastry.png',
    },
  ],
  savory: [
    {
      name: 'Crunchy Veg Burger',
      description:
        'Loaded burger with crispy patty, cheese slice, cucumber, tomato, and creamy sauce.',
      details:
        'A filling savory snack for quick bites and evening orders. Best served warm and fresh.',
      price: 'Rs. 90',
      image: '/savory-burger.png',
    },
    {
      name: 'Paneer Stuffed Rolls',
      description:
        'Soft baked rolls filled with spicy paneer stuffing and finished with fresh coriander.',
      details:
        'Suitable for tea-time snacks and small party platters with rich paneer masala flavor.',
      price: 'Rs. 70',
      image: '/savory-paneer-rolls.png',
    },
    {
      name: 'Cheese Pocket',
      description:
        'Baked savory pocket with cheesy filling and herbed mayo drizzle on top.',
      details:
        'A warm bakery snack with soft bread exterior and rich cheesy center.',
      price: 'Rs. 65',
      image: '/savory-cheese-pocket.png',
    },
    {
      name: 'Creamy Savory Wrap',
      description:
        'Stuffed roll-style wrap with spiced filling and creamy topping.',
      details:
        'An easy grab-and-go savory item with a soft baked shell and full-flavored filling.',
      price: 'Rs. 75',
      image: '/savory-wrap.png',
    },
    {
      name: 'Masala Bunwich',
      description:
        'Soft bun sandwich packed with savory filling and toasted edges.',
      details:
        'A bakery-style stuffed bun option for customers looking for a light savory meal.',
      price: 'Rs. 60',
      image: '/savory-grilled-bunwich.png',
    },
    {
      name: 'Grilled Veg Sandwich',
      description:
        'Triangular grilled sandwich with creamy mixed veggie stuffing.',
      details:
        'Good for breakfast or snack orders. Crisp toast outside with rich savory filling inside.',
      price: 'Rs. 80',
      image: '/savory-grilled-sandwich.png',
    },
    {
      name: 'Stuffed Puff Square',
      description:
        'Flaky baked puff square with savory masala filling.',
      details:
        'Layered and crisp from the outside with a hot spiced center, ideal for bakery counters.',
      price: 'Rs. 45',
      image: '/savory-puff-square.png',
    },
    {
      name: 'Veg Patties',
      description:
        'Golden layered patties with classic bakery-style savory filling.',
      details:
        'A standard fast-moving savory item for display counters and takeaway snack boxes.',
      price: 'Rs. 35',
      image: '/savory-patties.png',
    },
    {
      name: 'Club Sandwich',
      description:
        'Fresh sandwich triangles with layered vegetables and creamy filling.',
      details:
        'Soft bread sandwich for quick snack orders with a lighter, fresh-style savory profile.',
      price: 'Rs. 85',
      image: '/savory-club-sandwich.png',
    },
    {
      name: 'Veg Rolls',
      description:
        'Baked savory rolls with spiced filling wrapped in flaky layers.',
      details:
        'A compact and satisfying snack option that works well for takeaway and evening counter service.',
      price: 'Rs. 50',
      image: '/savory-veg-rolls.png',
    },
  ],
}

const quickFacts = [
  'Fresh bread batches at 8:00 AM and 4:00 PM',
  'Custom cakes for birthdays, weddings, and office parties',
  'Serving customers since 1998',
]

const phoneNumber = '9311209666'
const dialerNumber = 'tel:9311209666'
const directionsUrl = 'https://maps.app.goo.gl/FnuKMfSo7jjYDyDeA'

function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('pastry')
  const visibleItems = menuItems[selectedCategory]

  return (
    <div className="page-shell">
      <header className="hero-section">
        <nav className="topbar" aria-label="Primary">
          <div className="brand-block">
            <img
              className="brand-logo-image"
              src="/logo-current.png"
              alt="La Aaman Bakery logo"
            />
          </div>
          <div className="topbar-links">
            <a href="#menu">Menu</a>
            <a href="#story">Story</a>
            <a href="#visit">Visit</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Neighbourhood bakery in your city</p>
            <h1>Warm breads, handmade cakes, and pastry boxes for every day.</h1>
            <p className="hero-text">
              La Aaman Bakery serves oven-fresh breads, celebration cakes,
              pastries, and tea-time snacks with a simple focus: good
              ingredients and a reliable daily bake. We have been operational
              since 1998 and we are accepting orders on call only.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href={dialerNumber}>
                Call to order
              </a>
              <a className="secondary-action" href="#menu">
                Explore menu
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Bakery highlights">
            <p className="card-label">Today at the counter</p>
            <ul>
              {quickFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <div className="hours-chip">
              <span>Open daily</span>
              <strong>8:00 AM to 10:00 PM</strong>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="featured-section" id="menu">
          <div className="section-heading">
            <p className="eyebrow">Featured picks</p>
            <h2>Hover a menu item to highlight it and click to see details.</h2>
          </div>

          <div className="menu-tabs" role="tablist" aria-label="Menu categories">
            <button
              className={`menu-tab ${selectedCategory === 'pastry' ? 'active' : ''}`}
              type="button"
              onClick={() => setSelectedCategory('pastry')}
            >
              Pastry
            </button>
            <button
              className={`menu-tab ${selectedCategory === 'savory' ? 'active' : ''}`}
              type="button"
              onClick={() => setSelectedCategory('savory')}
            >
              Savory
            </button>
          </div>

          <div className="menu-scroll-shell">
            {visibleItems.length ? (
              <div className="card-grid">
                {visibleItems.map((item) => (
                  <article
                    className="product-card"
                    key={item.name}
                    onClick={() => setSelectedItem(item)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        setSelectedItem(item)
                      }
                    }}
                    role="button"
                    tabIndex="0"
                    aria-label={`View details for ${item.name}`}
                  >
                    <img
                      className="product-image"
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                    <p className="product-price">{item.price}</p>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button className="product-details" type="button">
                      View details
                    </button>
                    <a
                      className="product-call"
                      href={dialerNumber}
                      onClick={(event) => event.stopPropagation()}
                    >
                      Call to order
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <article
                className="empty-menu-card"
                aria-label="No items in this category yet"
              >
                <h3>Savory items coming soon</h3>
                <p>
                  Add your puffs, patties, rolls, sandwiches, or other savory
                  products and I can place them here.
                </p>
              </article>
            )}
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="story-copy">
            <p className="eyebrow">Why people choose us</p>
            <h2>Built for everyday bakery runs and special occasions.</h2>
            <p>
              From breakfast pav and tea cakes to custom celebration orders,
              La Aaman Bakery is designed to serve both quick walk-ins and
              planned events. The menu stays familiar, the quality stays
              consistent, and new trays come out of the oven through the day.
              Serving since 1998, all advance orders are accepted by call only.
            </p>
          </div>

          <div className="story-panel">
            <div>
              <span className="story-number">1998</span>
              <p>La Aaman Bakery has been serving the neighbourhood since 1998.</p>
            </div>
            <div>
              <span className="story-number">100%</span>
              <p>Eggless cake options available on request.</p>
            </div>
            <div>
              <span className="story-number">24 hrs</span>
              <p>Recommended notice for custom cake designs and bulk orders.</p>
            </div>
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="section-heading">
            <p className="eyebrow">Visit or call</p>
            <h2>Plan your next bakery stop and place orders by phone.</h2>
          </div>

          <div className="visit-grid">
            <div className="visit-card">
              <h3>Store details</h3>
              <p>RZ-F1 , Mahavir Enclave , Opposite Sulabh Museum of Toilets</p>
              <p>
                Call:{' '}
                <a className="inline-call" href={dialerNumber}>
                  {phoneNumber}
                </a>
              </p>
              <p>Email: hello@amanbakery.in</p>
            </div>
            <div className="visit-card">
              <h3>Ordering</h3>
              <p>We accept orders on call only</p>
              <p>
                Tap <a className="inline-call" href={dialerNumber}>Call</a> to
                open your dialer
              </p>
              <p>Available during store hours</p>
            </div>
            <div className="visit-card">
              <h3>Hours</h3>
              <p>Monday to Sunday</p>
              <p>8:00 AM to 10:00 PM</p>
              <p>Custom cake pickup till 10:00 PM</p>
            </div>
          </div>
        </section>
      </main>

      {selectedItem ? (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedItem(null)}
          role="presentation"
        >
          <section
            className="product-modal"
            onClick={(event) => event.stopPropagation()}
            aria-label={`${selectedItem.name} details`}
          >
            <img
              className="modal-image"
              src={selectedItem.image}
              alt={selectedItem.name}
            />
            <div className="modal-copy">
              <p className="eyebrow">Product details</p>
              <h3>{selectedItem.name}</h3>
              <p className="product-price">{selectedItem.price}</p>
              <p>{selectedItem.description}</p>
              <p>{selectedItem.details}</p>
              <div className="modal-actions">
                <a className="primary-action" href={dialerNumber}>
                  Call to order
                </a>
                <button
                  className="secondary-action modal-close"
                  type="button"
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </section>
        </div>
      ) : null}

      <a
        className="floating-directions-button"
        href={directionsUrl}
        target="_blank"
        rel="noreferrer"
      >
        Get Directions
      </a>
    </div>
  )
}

export default App
