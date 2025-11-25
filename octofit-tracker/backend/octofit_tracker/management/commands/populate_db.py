from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from datetime import date

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Teams
        marvel = Team.objects.create(name='Marvel', description='Team Marvel Superheroes')
        dc = Team.objects.create(name='DC', description='Team DC Superheroes')

        # Users
        users = [
            User(email='tony@stark.com', name='Tony Stark', team='Marvel', is_superhero=True),
            User(email='steve@rogers.com', name='Steve Rogers', team='Marvel', is_superhero=True),
            User(email='bruce@wayne.com', name='Bruce Wayne', team='DC', is_superhero=True),
            User(email='clark@kent.com', name='Clark Kent', team='DC', is_superhero=True),
        ]
        User.objects.bulk_create(users)

        # Activities
        activities = [
            Activity(user='tony@stark.com', type='Running', duration=30, date=date.today()),
            Activity(user='steve@rogers.com', type='Cycling', duration=45, date=date.today()),
            Activity(user='bruce@wayne.com', type='Swimming', duration=60, date=date.today()),
            Activity(user='clark@kent.com', type='Flying', duration=120, date=date.today()),
        ]
        Activity.objects.bulk_create(activities)

        # Workouts
        workouts = [
            Workout(name='Super Strength', description='Strength workout for superheroes', difficulty='Hard'),
            Workout(name='Flight Training', description='Flight workout for superheroes', difficulty='Medium'),
        ]
        Workout.objects.bulk_create(workouts)

        # Leaderboard
        leaderboard = [
            Leaderboard(team='Marvel', points=150, rank=1),
            Leaderboard(team='DC', points=120, rank=2),
        ]
        Leaderboard.objects.bulk_create(leaderboard)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
