from datetime import datetime

from extensions import db


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    name = db.Column(db.String(100))
    google_id = db.Column(db.String(50), unique=True)
    created_at = db.Column(db.DateTime, default=datetime.now())

    # Relationship to link vocabulary and attempts
    vocabulary = db.relationship('Vocabulary', backref='user', cascade="all, delete", lazy=True)
    attempts = db.relationship('Attempt', backref='user', cascade="all, delete", lazy=True)


class Vocabulary(db.Model):
    __tablename__ = 'vocabulary'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    word = db.Column(db.Text, nullable=False)

    __table_args__ = (db.UniqueConstraint('user_id', 'word', name='uq_user_word'),)


class Attempt(db.Model):
    __tablename__ = 'attempts'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.now())
    passage_text = db.Column(db.Text, nullable=False)
    hsk_level = db.Column(db.Integer)
    length = db.Column(db.Integer, nullable=False)
    time_seconds = db.Column(db.Float, nullable=False)
    cpm = db.Column(db.Float, nullable=False)
    used_vocab = db.Column(db.Boolean, default=True)
    prompt = db.Column(db.Text)
    summary = db.Column(db.Text)
