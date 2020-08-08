class NotesController < ApplicationController
    before_action :authenticate_user!
    before_action :find_note, only: [:show, :edit, :update, :destroy]

    def index
        @notes = Note.where(user_id: current_user)
    end
    
    def show
        if @note.user_id != current_user.id
            redirect_to notes_path
        end
    end
    
    def new
        @note = current_user.notes.build
    end
    
    def create
       respond_to do |format|
        @note = current_user.notes.build(note_params)
        if @note.save
            format.html { redirect_to notes_path, notice: 'Note was successfully created.' }
            format.json { render :show, status: :ok, location: @note }
        else 
            render 'new'
            format.html { render :new }
            format.json { render json: @note.errors, status: :unprocessable_entity }
        end  
    end
    end 

    
    def edit
        if @note.user_id != current_user.id
            redirect_to notes_path
        end
    end
    

    def update
        respond_to do |format|
        if @note.update(note_params)
            format.html { redirect_to notes_path, notice: 'Note was successfully updated.' }
            format.json { render :show, status: :ok, location: @note }
		else
             format.html { render :edit }
             format.json { render json: @note.errors, status: :unprocessable_entity }
        end
    end  
    end
    
    def destroy
      respond_to do |format|
        @note.destroy
        format.html { redirect_to notes_path, notice: 'Note was successfully deleted.' }
      end  
    end
    
    private

    def find_note
        @note = Note.find(params[:id])
    end
    
    def note_params
        params.require(:note).permit(:title, :content)
    end    
end
