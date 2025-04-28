import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Cache-busting update - 2025-04-25 (v3)

// Elon's fortune in dollars
const ELON_FORTUNE = 354000000000;

// Product data
const PRODUCTS = [
  {
    id: "openai",
    name: "OpenAI",
    price: 300000000000,
    img: "images/openai-new.png",
    desc: "Own the world's most advanced AI research lab.",
  },
  {
    id: "spacex-rocket",
    name: "SpaceX Rocket Launch",
    price: 150000000,
    img: "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/02/GGWYKcyagAA3gH-.jpeg?fit=1200&quality=89&ssl=1",
    desc: "Your very own rocket launch. Selfie from space included.",
  },
  {
    id: "tesla-roadster",
    name: "Tesla Roadster (in space)",
    price: 200000,
    img: "images/tesla-roadster-new.png",
    desc: "The car Elon actually launched into space.",
  },
  {
    id: "boring-tunnel",
    name: "Boring Company Tunnel to Your House",
    price: 50000000,
    img: "images/boring-tunnel-new.png",
    desc: "Avoid all LA traffic forever.",
  },
  {
    id: "nfl-team",
    name: "NFL Team (Average)",
    price: 4500000000,
    img: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?auto=format&fit=crop&w=400&q=80",
    desc: "Touchdown! You own a football franchise now.",
  },
  {
    id: "private-island",
    name: "Private Island (Caribbean)",
    price: 80000000,
    img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=400&q=80",
    desc: "Your own tropical paradise.",
  },
  {
    id: "superyacht",
    name: "Mega Luxury Yacht",
    price: 275000000,
    img: "images/yacht-new.png",
    desc: "Because boats are cool too, not just rockets.",
  },
  {
    id: "mansion",
    name: "Beverly Hills Mansion",
    price: 125000000,
    img: "https://learncalifornia.org/wp-content/uploads/2023/12/houses-beverly-hills-1024x585.jpg",
    desc: "A modest little 20 bedroom home.",
  },
  {
    id: "skyscraper",
    name: "Downtown Skyscraper",
    price: 850000000,
    img: "images/skyscraper-new.png",
    desc: "Just buy a whole building, why not?",
  },
  {
    id: "college-education",
    name: "4-Year College Education",
    price: 250000,
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80",
    desc: "Pay for someone's 4 years of tuition.",
  },
  {
    id: "mcdonalds-franchise",
    name: "McDonald's Franchise",
    price: 2200000,
    img: "https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?auto=format&fit=crop&w=400&q=80",
    desc: "Would you like fries with that?",
  },
  {
    id: "rolex",
    name: "Diamond-Encrusted Rolex",
    price: 85000,
    img: "https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&w=400&q=80",
    desc: "Never be late for space launches again.",
  },
  {
    id: "iphone-16",
    name: "iPhone 16 Pro Max",
    price: 1199,
    img: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=400&q=80",
    desc: "The latest Apple flagship smartphone.",
  },
  {
    id: "costco-hotdog",
    name: "Costco Hot Dog Combo (10,000)",
    price: 15000,
    img: "images/costco-hotdog-new.png",
    desc: "10,000 hot dogs with drinks. Still only $1.50 each!",
  },
  {
    id: "mars-base",
    name: "Mars Base Construction",
    price: 10000000000,
    img: "images/mars-final.png",
    desc: "Build your own colony on the Red Planet.",
  },
  {
    id: "mona-lisa",
    name: "Mona Lisa",
    price: 850000000,
    img: "images/mona-lisa-new.png",
    desc: "The world's most famous painting (not actually for sale).",
  },
  {
    id: "politician",
    name: "Influence a Politician",
    price: 50000000,
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=400&q=80",
    desc: "Legally, through campaign donations and lobbying, of course.",
  },
  {
    id: "private-jet",
    name: "Gulfstream G700",
    price: 78000000,
    img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=400&q=80",
    desc: "The most luxurious private jet in the world.",
  },
  {
    id: "super-bowl-ad",
    name: "Super Bowl Commercial",
    price: 7000000,
    img: "images/superbowl-new.png",
    desc: "30 seconds of ad time during the big game.",
  },
  {
    id: "nba-team",
    name: "NBA Franchise",
    price: 3500000000,
    img: "images/nba-new.png",
    desc: "Own your favorite basketball team.",
  },
  {
    id: "mlb-team",
    name: "MLB Baseball Team",
    price: 2800000000,
    img: "https://images.unsplash.com/photo-1562525736-6a1b339cecb7?auto=format&fit=crop&w=400&q=80",
    desc: "Peanuts and Cracker Jacks included.",
  },
  {
    id: "moon-land",
    name: "1000 Acres on the Moon",
    price: 65000000,
    img: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=400&q=80",
    desc: "Prime real estate with an amazing Earth view.",
  },
  {
    id: "movie-production",
    name: "Hollywood Blockbuster",
    price: 350000000,
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=400&q=80",
    desc: "Produce your own summer blockbuster.",
  },
  {
    id: "submarine",
    name: "Luxury Submarine",
    price: 90000000,
    img: "images/submarine-new.png",
    desc: "Explore the deep seas in style.",
  },
  {
    id: "picasso",
    name: "Picasso Painting",
    price: 150000000,
    img: "https://images.unsplash.com/photo-1585374388004-63511d3cbb23?auto=format&fit=crop&w=400&q=80",
    desc: "A genuine masterpiece for your wall.",
  },
  {
    id: "college-endowment",
    name: "College Endowment",
    price: 1500000000,
    img: "images/college-endowment-new.png",
    desc: "Fund a university and get your name on a building.",
  },
  {
    id: "helicopter",
    name: "Luxury Helicopter",
    price: 27000000,
    img: "https://images.unsplash.com/photo-1504026681840-2f94ed3b3282?auto=format&fit=crop&w=400&q=80",
    desc: "Beat the traffic in style.",
  },
  {
    id: "sports-car-collection",
    name: "Ultimate Car Collection",
    price: 95000000,
    img: "https://images.unsplash.com/photo-1626083182627-987180fc1b53?auto=format&fit=crop&w=400&q=80",
    desc: "50 of the world's most exclusive cars.",
  },
  {
    id: "diamond",
    name: "Hope Diamond",
    price: 350000000,
    img: "https://images.unsplash.com/photo-1633279309534-53bd0ce574e1?auto=format&fit=crop&w=400&q=80",
    desc: "One of the most famous gems in the world.",
  },
  {
    id: "wine-collection",
    name: "World-Class Wine Cellar",
    price: 15000000,
    img: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=400&q=80",
    desc: "10,000 bottles of the finest vintages.",
  },
  {
    id: "space-tourism",
    name: "Space Tourism Package",
    price: 450000,
    img: "https://images.unsplash.com/photo-1457364887197-9150188c107b?auto=format&fit=crop&w=400&q=80",
    desc: "A week in orbit aboard a private space station.",
  },
  {
    id: "twitter",
    name: "Buy Twitter/X Again",
    price: 44000000000,
    img: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?auto=format&fit=crop&w=400&q=80",
    desc: "For when once isn't enough.",
  },
  {
    id: "charity",
    name: "End World Hunger (1 year)",
    price: 45000000000,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbafc3e9a?auto=format&fit=crop&w=400&q=80",
    desc: "Feed everyone on the planet for a year.",
  },
  {
    id: "air-force-one",
    name: "Air Force One Replica",
    price: 660000000,
    img: "https://images.unsplash.com/photo-1560260240-c6ef90a163a4?auto=format&fit=crop&w=400&q=80",
    desc: "Just like the President's, but all yours.",
  },
  {
    id: "nft",
    name: "Most Expensive NFT",
    price: 91800000,
    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=400&q=80",
    desc: "A very expensive JPEG that you definitely own.",
  },
  {
    id: "smallcountry",
    name: "Small Country GDP (1 year)",
    price: 14000000000,
    img: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=400&q=80",
    desc: "Fund an entire nation for a year.",
  }
];

function App() {
  // Simple counts array indexed by product ID
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  // Total spent
  const [totalSpent, setTotalSpent] = useState<number>(0);

  // Format currency helper
  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Calculate remaining amount
  const remaining = ELON_FORTUNE - totalSpent;

  // Buy an item
  const handleBuy = (id: string, price: number) => {
    // Only allow purchase if enough money remains
    if (remaining >= price) {
      // Update the item count
      const currentCount = counts[id] || 0;
      const newCounts = { ...counts, [id]: currentCount + 1 };
      setCounts(newCounts);

      // Update the total spent
      const newTotal = totalSpent + price;
      setTotalSpent(newTotal);
    }
  };

  // Sell an item
  const handleSell = (id: string, price: number) => {
    const currentCount = counts[id] || 0;

    // Only proceed if we have at least one of this item
    if (currentCount > 0) {
      // Update the item count
      const newCounts = { ...counts, [id]: currentCount - 1 };
      setCounts(newCounts);

      // Update the total spent
      const newTotal = totalSpent - price;
      setTotalSpent(newTotal);
    }
  };

  // Reset everything
  const handleReset = () => {
    setCounts({});
    setTotalSpent(0);
  };

  // Calculate progress percentage (capped at 100%)
  const progressPercent = Math.min(100, (totalSpent / ELON_FORTUNE) * 100);

  return (
    <div className="min-h-screen bg-zinc-50 pb-16">
      {/* Header with fortune info */}
      <header className="py-6 flex flex-col items-center gap-2 bg-white shadow-md mb-6 sticky top-0 z-10">
        <img
          className="w-24 md:w-32 rounded-full border-4 border-zinc-200 mb-1"
          src="images/elon-new.png"
          alt="Elon Musk with sunglasses"
        />
        <h1 className="text-2xl md:text-4xl font-bold text-zinc-800">
          Spend Elon's Cash
        </h1>
        <p className="text-zinc-600 text-base md:text-xl px-4 text-center">
          If Elon cashed out all of his stocks & assets today he would have approximately {formatMoney(ELON_FORTUNE)}. Can you burn it all?
        </p>

        {/* Progress bar */}
        <div className="w-full max-w-2xl px-4 mt-2">
          <div className="h-4 bg-zinc-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-600 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between mt-1 text-sm text-zinc-500">
            <span>Spent: {formatMoney(totalSpent)}</span>
            <span
              className={
                remaining < 0
                  ? "text-red-600 font-semibold"
                  : "text-green-700 font-semibold"
              }
            >
              Remaining: {formatMoney(remaining)}
            </span>
          </div>
        </div>

        <div className="mt-3">
          <Button
            variant="outline"
            className="px-6"
            onClick={handleReset}
            type="button"
          >
            Reset All
          </Button>
        </div>
      </header>

      {/* Products grid */}
      <main className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {PRODUCTS.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col items-center p-4 gap-2 shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-28 h-28 object-cover rounded-md mb-2 hover:scale-105 transition"
              />
              <h2 className="text-lg font-semibold text-center">{product.name}</h2>
              <div className="text-zinc-600 text-sm mb-2 text-center">
                {product.desc}
              </div>
              <div className="mt-auto font-bold text-zinc-800">
                {formatMoney(product.price)}
              </div>
              <div className="flex gap-3 my-2 items-center">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={(counts[product.id] || 0) === 0}
                  onClick={() => handleSell(product.id, product.price)}
                  className="h-8 w-8 p-0 rounded-full"
                  type="button"
                >
                  -
                </Button>
                <span className="font-bold text-lg w-8 text-center">
                  {counts[product.id] || 0}
                </span>
                <Button
                  variant="default"
                  size="sm"
                  disabled={remaining < product.price}
                  onClick={() => handleBuy(product.id, product.price)}
                  className="h-8 w-8 p-0 rounded-full"
                  type="button"
                >
                  +
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
