import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingBag, Users, MapPin, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TownTeamLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b-2 border-charcoal bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-charcoal rounded-sm transform rotate-3"></div>
              <span className="text-2xl font-black text-charcoal tracking-tight">TOWN TEAM</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-charcoal font-bold hover:text-brick-red transition-colors">
                SHOP
              </Link>
              <Link href="#" className="text-charcoal font-bold hover:text-brick-red transition-colors">
                STYLE
              </Link>
              <Link href="#" className="text-charcoal font-bold hover:text-brick-red transition-colors">
                ABOUT
              </Link>
              <Link href="#" className="text-charcoal font-bold hover:text-brick-red transition-colors">
                CONTACT
              </Link>
            </div>
            <Button className="bg-charcoal text-white hover:bg-brick-red transform hover:rotate-1 transition-all">
              <ShoppingBag className="w-4 h-4 mr-2" />
              CART
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-concrete-gray py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-brick-red text-white font-bold px-4 py-2 transform -rotate-1">
                  NEW COLLECTION
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black text-charcoal leading-tight transform -rotate-1">
                  STYLE THAT
                  <br />
                  <span className="text-brick-red">MOVES</span>
                  <br />
                  WITH YOU
                </h1>
                <p className="text-xl text-charcoal font-medium max-w-md">
                  Urban fashion for the modern Egyptian man. Bold, confident, and street-smart.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-charcoal text-white hover:bg-brick-red transform hover:rotate-1 transition-all font-bold text-lg px-8 py-4"
                >
                  DISCOVER THE LOOK
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transform hover:-rotate-1 transition-all font-bold text-lg px-8 py-4 bg-transparent"
                >
                  WATCH STORY
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-denim-blue rounded-lg transform rotate-3 opacity-20"></div>
              <Image
                src="/images/hero-urban-man.png"
                alt="Urban fashion sketch - confident man in Cairo cityscape"
                width={500}
                height={600}
                className="relative z-10 w-full h-auto transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 border-4 border-brick-red rounded-full transform rotate-12 opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-sand-beige transform -rotate-12 opacity-50"></div>
      </section>

      {/* Featured Outfits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4 transform -rotate-1">FEATURED LOOKS</h2>
            <div className="w-24 h-1 bg-brick-red mx-auto transform rotate-1"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "URBAN WARRIOR", price: "EGP 1,200", category: "JACKET" },
              { name: "STREET KING", price: "EGP 800", category: "SHIRT" },
              { name: "CITY WALKER", price: "EGP 950", category: "JEANS" },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-2 border-charcoal transform hover:rotate-1 hover:scale-105 transition-all duration-300 bg-concrete-gray"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src="/images/urban-warrior-jacket.png"
                      alt={item.name}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-brick-red text-white font-bold transform -rotate-3">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-charcoal mb-2">{item.name}</h3>
                    <p className="text-2xl font-bold text-brick-red mb-4">{item.price}</p>
                    <Button className="w-full bg-charcoal text-white hover:bg-brick-red transform hover:rotate-1 transition-all font-bold">
                      ADD TO CART
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Town Team */}
      <section className="py-20 bg-sand-beige">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/brand-story-timeline.png"
                alt="Town Team Story - Cairo urban landscape sketch"
                width={600}
                height={500}
                className="w-full h-auto transform rotate-1 hover:-rotate-1 transition-transform duration-300"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6 transform -rotate-1">
                  THE TOWN TEAM
                  <br />
                  <span className="text-brick-red">STORY</span>
                </h2>
                <div className="w-24 h-1 bg-brick-red transform rotate-2 mb-6"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brick-red rounded-full flex items-center justify-center transform rotate-12">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">BORN IN CAIRO</h3>
                    <p className="text-charcoal">
                      From the bustling streets of Egypt's capital, we understand urban style.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-denim-blue rounded-full flex items-center justify-center transform -rotate-12">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">FOR THE MODERN MAN</h3>
                    <p className="text-charcoal">
                      Designed for men who aren't afraid to stand out and make a statement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-charcoal rounded-full flex items-center justify-center transform rotate-6">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">TIMELESS EDGE</h3>
                    <p className="text-charcoal">
                      Classic pieces with a contemporary twist that never goes out of style.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Looks */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4 transform rotate-1">STREET STYLE</h2>
            <p className="text-xl text-charcoal max-w-2xl mx-auto">
              See how our community rocks Town Team pieces in the real world
            </p>
            <div className="w-24 h-1 bg-brick-red mx-auto mt-4 transform -rotate-1"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "AHMED M.", location: "CAIRO", rating: 5 },
              { name: "OMAR K.", location: "ALEXANDRIA", rating: 5 },
              { name: "HASSAN A.", location: "GIZA", rating: 5 },
            ].map((customer, index) => (
              <Card
                key={index}
                className="border-2 border-charcoal transform hover:-rotate-1 hover:scale-105 transition-all duration-300 bg-concrete-gray"
              >
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src="/images/customer-ahmed.png"
                      alt="Ahmed M. street style"
                      width={250}
                      height={300}
                      className="w-full h-64 object-cover transform rotate-1"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white p-2 border-2 border-charcoal transform rotate-12">
                      <div className="flex">
                        {[...Array(customer.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-brick-red text-brick-red" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-black text-charcoal">{customer.name}</h3>
                    <p className="text-sm text-charcoal font-medium">{customer.location}</p>
                    <p className="text-sm text-charcoal mt-2 italic">
                      "Town Team gets my style. Quality pieces that make me feel confident on the streets."
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 transform -rotate-1">
              READY TO
              <br />
              <span className="text-brick-red">MAN UP?</span>
            </h2>
            <p className="text-xl text-concrete-gray max-w-2xl mx-auto">
              Join the Town Team community and discover your signature urban style
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brick-red text-white hover:bg-white hover:text-charcoal transform hover:rotate-1 transition-all font-bold text-lg px-8 py-4"
              >
                SHOP NOW
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal transform hover:-rotate-1 transition-all font-bold text-lg px-8 py-4 bg-transparent"
              >
                FOLLOW US
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-charcoal py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-charcoal rounded-sm transform rotate-3"></div>
                <span className="text-2xl font-black text-charcoal">TOWN TEAM</span>
              </div>
              <p className="text-charcoal">Urban fashion for the modern Egyptian man.</p>
            </div>
            <div>
              <h3 className="text-lg font-black text-charcoal mb-4">SHOP</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-charcoal hover:text-brick-red">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-charcoal hover:text-brick-red">
                    Jackets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-charcoal hover:text-brick-red">
                    Shirts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-charcoal hover:text-brick-red">
                    Jeans
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black text-charcoal mb-4">SUPPORT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-charcoal hover:text-brick-red">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-charcoal hover:text-brick-red">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-charcoal hover:text-brick-red">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-charcoal hover:text-brick-red">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black text-charcoal mb-4">CONNECT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-charcoal hover:text-brick-red">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-charcoal hover:text-brick-red">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-charcoal hover:text-brick-red">
                    TikTok
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-charcoal hover:text-brick-red">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-charcoal mt-8 pt-8 text-center">
            <p className="text-charcoal font-medium">© 2024 Town Team. All rights reserved. Made with ❤️ in Egypt.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
