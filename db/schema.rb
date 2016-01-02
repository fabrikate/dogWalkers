# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160102002252) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "additional_pics", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "dog_id"
    t.string   "additionalURL"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "appointments", force: :cascade do |t|
    t.integer  "owner_id"
    t.integer  "dog_id"
    t.integer  "walker_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "meet_at"
    t.boolean  "walkerConfirm"
    t.boolean  "dogReturnedConfirm"
    t.float    "amountPayment"
    t.boolean  "ownerRequested"
  end

  create_table "charges", force: :cascade do |t|
    t.integer  "owner_id"
    t.integer  "walker_id"
    t.float    "amountPayment"
    t.string   "stripeToken"
    t.string   "stripeEmail"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "dog_walkers", force: :cascade do |t|
    t.string   "user_id"
    t.string   "has_dogs"
    t.string   "availability"
    t.string   "rating"
    t.string   "fbInfo"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "dogs", force: :cascade do |t|
    t.string   "user_id"
    t.string   "name"
    t.string   "age"
    t.string   "weight"
    t.string   "aggression"
    t.string   "confidence"
    t.string   "training"
    t.string   "rating"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.string   "pictureURL"
    t.string   "additiionalPics", default: [],              array: true
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "dog_owner"
    t.string   "dog_walker"
    t.string   "email"
    t.string   "password"
    t.string   "password_digest"
    t.string   "profileURL"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.string   "dogs",             default: [],              array: true
    t.string   "provider"
    t.string   "uid"
    t.string   "oauth_token"
    t.datetime "oauth_expires_at"
    t.string   "phoneNum"
    t.float    "dogWalkerRating"
    t.string   "streetAddress"
    t.string   "zipCode"
    t.string   "additionalPics",   default: [],              array: true
  end

end
