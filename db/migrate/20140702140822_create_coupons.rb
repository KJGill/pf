class CreateCoupons < ActiveRecord::Migration
  def change
    create_table :coupons do |t|
      t.integer :series_id
      t.date :payment_date
      t.float :amount

      t.timestamps
    end
  end
end
