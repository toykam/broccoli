export default function Footer() {
    return (
      <footer className="bg-binance-black text-binance-yellow p-8 border-t border-binance-yellow">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">About $BROCCOLI</h3>
              <p className="text-sm">
                $BROCCOLI is a meme token inspired by CZ's dog, Broccoli. Join the fun and be part of the crypto revolution!
              </p>
            </div>
  
          </div>
  
          {/* Copyright */}
          <div className="text-center mt-8 pt-4 border-t border-binance-yellow">
            <p className="text-sm">
              © 2023 $BROCCOLI Token. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }