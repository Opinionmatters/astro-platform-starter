import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

export default function CompanyExperiencePlatform() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    company: "",
    role: "",
    rating: "",
    pros: "",
    cons: "",
    culture: "",
  });
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    if (!form.company || !form.rating) return;

    const newReview = {
      ...form,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);
    setForm({ company: "", role: "", rating: "", pros: "", cons: "", culture: "" });
  };

  const filteredReviews = reviews.filter((review) =>
    review.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V4H2v16h5m10 0v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6m10 0H7" />
              </svg>
            </div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              EMPLOYEE MATTERS
            </h1>
          </div>

          <p className="text-xl text-gray-700 italic">
            Because Every Employee Voice Counts
          </p>

          <p className="max-w-2xl mx-auto text-gray-600">
            A transparent platform where professionals share real workplace experiences, helping future employees make informed career decisions.
          </p>

          <div className="flex justify-center gap-4">
            <Button className="rounded-2xl px-6 py-3 text-base shadow-lg">
              Share Your Experience
            </Button>
            <Button variant="outline" className="rounded-2xl px-6 py-3 text-base">
              Explore Companies
            </Button>
          </div>
        </motion.div>

        {/* Search */}
        <div className="flex justify-center">
          <Input
            placeholder="Search by company name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Submission Form */}
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Share Your Experience</h2>

            <Input
              placeholder="Company Name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />

            <Input
              placeholder="Your Role (e.g. Software Engineer)"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />

            <Select
              value={form.rating}
              onValueChange={(value) => setForm({ ...form, rating: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Overall Rating (1-5)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 - Very Bad</SelectItem>
                <SelectItem value="2">2 - Bad</SelectItem>
                <SelectItem value="3">3 - Average</SelectItem>
                <SelectItem value="4">4 - Good</SelectItem>
                <SelectItem value="5">5 - Excellent</SelectItem>
              </SelectContent>
            </Select>

            <Textarea
              placeholder="Work Culture Description"
              value={form.culture}
              onChange={(e) => setForm({ ...form, culture: e.target.value })}
            />

            <Textarea
              placeholder="Pros"
              value={form.pros}
              onChange={(e) => setForm({ ...form, pros: e.target.value })}
            />

            <Textarea
              placeholder="Cons"
              value={form.cons}
              onChange={(e) => setForm({ ...form, cons: e.target.value })}
            />

            <Button onClick={handleSubmit} className="w-full">
              Submit Review
            </Button>
          </CardContent>
        </Card>

        {/* Reviews Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="rounded-2xl shadow-md">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">{review.company}</h3>
                  <p className="text-sm text-gray-500">Role: {review.role}</p>
                  <p className="text-sm">Rating: ⭐ {review.rating}/5</p>
                  <p className="text-sm text-gray-400">Posted on {review.date}</p>
                  <div>
                    <h4 className="font-semibold">Work Culture</h4>
                    <p className="text-sm">{review.culture}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Pros</h4>
                    <p className="text-sm">{review.pros}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Cons</h4>
                    <p className="text-sm">{review.cons}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
