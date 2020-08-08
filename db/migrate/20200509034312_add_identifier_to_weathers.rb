class AddIdentifierToWeathers < ActiveRecord::Migration[6.0]
  def change
    add_column :weathers, :identifier, :string
  end
end
