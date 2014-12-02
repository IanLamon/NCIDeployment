#!/usr/bin/perl

use CGI qw(:standard);
use CGI::Carp qw(fatalsToBrowser);
use DBI;

print header, start_html("Accept Form");

my $name=param('name');
my $recommend=param('recommend');
print h3("inserting name:$name and recommendation:$recommend into Database");
insertDB($name,$recommend);
print h3("Showing the contents of the Database");
showDB();

print end_html;

exit;

sub insertDB {
my $name = shift;
my $recommend =shift;

my $dbhost='127.0.0.1'; my $dbport=3306;
my $dsn="DBI:mysql:dbtest;host=$dbhost;port=$dbport";
$dbh = DBI->connect($dsn, 'dbtestuser', 'dbpassword'
                ) || die "Could not connect to database: $DBI::errstr";
$sth = $dbh->prepare("insert into recommendations(name,recommend) values(?,?)");
$sth->execute($name,$recommend);
}

sub showDB {
my $dbhost='127.0.0.1'; my $dbport=3306;
my $dsn="DBI:mysql:dbtest;host=$dbhost;port=$dbport";
$dbh = DBI->connect($dsn, 'dbtestuser', 'dbpassword'
                ) || die "Could not connect to database: $DBI::errstr";
$sth = $dbh->prepare("select * from recommendations");
$sth->execute();
while (my $result = $sth->fetchrow_hashref()) {
        print $result->{'name'}," ",$result->{'recommend'},"<p>";
}
}
