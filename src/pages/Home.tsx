import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Star, ArrowRight, Heart, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { INDIAN_CITIES, EVENT_TYPES } from "@/data/constants";
import SERVICES_DATA from "@/data/services";
import { formatPrice } from "@/lib/utils";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [eventSearch, setEventSearch] = useState("");

  const filteredCities = INDIAN_CITIES.filter(city =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  );

  const filteredEvents = EVENT_TYPES.filter(event =>
    event.toLowerCase().includes(eventSearch.toLowerCase())
  );

  const featuredServices = SERVICES_DATA.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center wedding-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="gold" className="mb-4 text-sm px-4 py-1">
              India's #1 Wedding Services Marketplace
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Plan Your <span className="text-gradient-gold">Dream Wedding</span> With Verified Vendors
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with 1000+ verified vendors for photography, catering, decoration, mehendi, and all wedding services across India.
            </p>

            {/* Search Box */}
            <Card className="max-w-3xl mx-auto p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="p-2">
                        <Input
                          placeholder="Search city..."
                          value={citySearch}
                          onChange={(e) => setCitySearch(e.target.value)}
                          className="mb-2"
                        />
                      </div>
                      {filteredCities.slice(0, 50).map(city => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Event Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="p-2">
                        <Input
                          placeholder="Search event..."
                          value={eventSearch}
                          onChange={(e) => setEventSearch(e.target.value)}
                          className="mb-2"
                        />
                      </div>
                      {filteredEvents.map(event => (
                        <SelectItem key={event} value={event}>{event}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button size="lg" className="w-full" asChild>
                  <Link to={`/services?city=${selectedCity}&event=${selectedEvent}`}>
                    <Search className="h-4 w-4 mr-2" />
                    Find Services
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Verified Vendors", desc: "All vendors verified with Aadhaar & bank details" },
              { icon: Heart, title: "Trusted Services", desc: "4.5+ rated services with genuine reviews" },
              { icon: Clock, title: "Easy Booking", desc: "Book with just 10% advance payment" }
            ].map((feature, i) => (
              <Card key={i} className="text-center p-6">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-display font-bold">Featured Services</h2>
            <Button variant="outline" asChild>
              <Link to="/services">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map(service => (
              <Link key={service.id} to={`/services/${service.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative">
                    <img src={service.images[0]} alt={service.name} className="w-full h-full object-cover" />
                    <Badge className="absolute top-2 right-2">{service.category}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1 line-clamp-1">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{service.city}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-primary">{formatPrice(service.price)}</span>
                      <div className="flex items-center text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {service.rating}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Are You a Wedding Service Provider?</h2>
          <p className="mb-8 opacity-90">Join 1000+ verified vendors and grow your business with ShaadiSave</p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/vendor/register">Become a Vendor</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
